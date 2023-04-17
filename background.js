const twitter = 'https://twitter.com'

// chrome.action.onClicked.add

chrome.contextMenus.create({
    id: "coolrefs_download",
    title: "CoolRef Download Image",
    contexts: ["image"],
    // documentUrlPatterns: "https://twitter.com/*"
})
