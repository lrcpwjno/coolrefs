const twitter = 'https://twitter.com';

var path = '/Users/vl1000278391/PycharmProjects/CoolRefs';
console.log("path is", path);


// function download_tweet_images()

// chrome.action.onClicked.addListener(function(info, tab)
// ;)
// document.getElementsById('localdestination').onclick = ChangePath

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
    currentUrl = info.pageUrl;
    console.log(currentUrl);

    imgUrl = info.srcUrl;
    console.log(imgUrl);

    // work your string magic
};

chrome.contextMenus.onClicked.addListener(function(info, tab) {
    // testFunction()
    getPics(info, tab);
});

chrome.runtime.onInstalled.addListener(() => {
    chrome.contextMenus.create({
        id: "coolrefs_download",
        title: "CoolRef Download Image",
        contexts: ["image"],
        // documentUrlPatterns: ["https://twitter.com/*"],
        // onclick: testFunction
        // we should use info from: pageUrl, linkUrl?
    });
});