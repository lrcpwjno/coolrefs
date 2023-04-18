const twitter = 'https://twitter.com/';

function getPics(info, tab) {
    console.log(info.pageUrl);  // current url where you are sitting
    console.log(info.srcUrl);   // the photo url
    console.log(info.linkUrl);  // if it's a link, this is the destination

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

    if (info.srcUrl.includes("format=png")) {
        ext = ".png";
    } else if (info.srcUrl.includes("format=jpg")) {
        ext = ".jpg";
    } else {
        // if it's not one of these two then I'll have to sort it out myself...
        ext = "";
    }

    let source = info.srcUrl.split("&");
    console.log(source);

    chrome.downloads.download({
        url: source[0] + "&name=orig",
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