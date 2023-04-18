const twitter = 'https://twitter.com/';

var path = '/Users/vl1000278391/PycharmProjects/CoolRefs/images/';
console.log("path is", path);

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
    if (request.message === "update_path") {
        path_update = update_path(request.new_path);
        sendResponse({response: "OK"});
    };
});

function update_path(new_path) {
    path = new_path;
    console.log("background: new path is", path);
};

function testFunction() {
    console.log("you just clicked the context menu item...")
    console.log(path)
};

function getPics(info, tab) {
    console.log(info);

    console.log(info.pageUrl);  // current url where you are sitting
    console.log(info.srcUrl);   // the photo url
    console.log(info.linkUrl);  // if it's a link then this is the destination

    // work your string magic
    
    // https://twitter.com/momo_mark2/status/1647894313714720768/photo/1 ->
    //   ["", "momo_mark2", "status", "1647894313714720768", "photo", "1"]
    // https://twitter.com/lrnowjcp -> ["", "lrnowjcp"]
    // main -> ["", "home"]

    if (info.linkUrl) {
        console.log("invoked from the TL, likes list, or ");
        let url_segments = info.linkUrl.slice(twitter.length).split("/");
        filename = [url_segments[0], url_segments[2], url_segments[4]].join("-");
    }
    else {
        console.log("invoked from the photo itself");
        let url_segments = info.pageUrl.slice(twitter.length).split("/");
        filename = [url_segments[0], url_segments[2], url_segments[4]].join("-"); 
    };
    console.log("PHOTO FILENAME: ", filename);

    // find out the right extension
    if (info.srcUrl.includes("format=png")) {
        ext = ".png";
    } else if (info.srcUrl.includes("format=jpg")) {
        ext = ".jpg";
    } else {
        // if it's not one of these two then I'll have to sort it out myself...
        ext = "";
    }

    // todo: get the maximum size we can (original if possible?...)

    // now download that thing to the path specified earlier...
    // if it turns out we can't get out of default downloads folder easily, then that's ok
    // moving files in bulk is easy, the hard part is naming them properly
    // plus it lets us move stuff to landscape, tech, etc if needed
    chrome.downloads.download({
        url: info.srcUrl,
        filename: "coolrefs/" + filename + ext
    });
};

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    getPics(info, tab);
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "coolrefs_download",
        title: "CoolRef Download Image",
        contexts: ["image"],
        documentUrlPatterns: ["https://twitter.com/*"],
    });
});