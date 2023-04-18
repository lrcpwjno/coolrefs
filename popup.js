document.getElementById("submitbutton").addEventListener("click", updatePath);


function updatePath() {
    var path = document.getElementById("localdestination").value;
    var msg = "entered path is " + path;
    console.log(msg);

    let response_promise = chrome.runtime.sendMessage(
        {
            message: "update_path",
            new_path: path
        },
        // do we even need this....
        function(response) {
            // console.log(response.response)
        }
    )

};