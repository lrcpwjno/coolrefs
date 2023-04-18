document.getElementById("submitbutton").addEventListener("click", changePath);


function changePath() {
    var path = document.getElementById("localdestination").value;
    var msg = "path is " + path;
    console.log(msg);

    // chrome.runtime.sendMessage(
    //     {
    //         new_path: path
    //     },
        // maybe put a response in case the thing fails to set or something
    // )
    
};