// https://github.com/vipinkrishna

const video = document.getElementById('stream')

navigator.getUserMedia = navigator.getUserMedia ||
                         navigator.webkitGetUserMedia ||
                         navigator.mozGetUserMedia;

function startVideo() {
    navigator.getUserMedia(
        {video: {width: 720, height: 480}},
        stream => {
            video.srcObject = stream
        },
        err => console.error(err)
    )
}

if(navigator.getUserMedia) {
    startVideo()
} else {
    var divMessage = document.createElement("div")
    divMessage.innerHTML = "<h4>Not Supported | Deprecated!</h4>"
    video.parentElement.replaceWith(divMessage)
}
