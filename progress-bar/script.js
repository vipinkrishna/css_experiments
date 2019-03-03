// https://github.com/vipinkrishna

const progressbar = document.getElementsByClassName('progressbar')[0];

var i = setInterval(() => {
    const computedStyle = getComputedStyle(progressbar);
    const width = parseFloat(computedStyle.getPropertyValue('--width')) || 0;
    progressbar.style.setProperty('--width', width + 0.1);
    console.log(width);
    if(width === 100) {
        clearInterval(i);
    }
}, 5);