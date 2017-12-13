

function configurations() {
    barSize();
    barBorder();
    showProgress();
    fillBar();
    createBar();
}

var wrapper = document.querySelector('.pb-bar'),
    progress = document.querySelector('.pb-progress');
window.onload = configurations();

function barSize() {
    wrapper.style.width = config.width;
    wrapper.style.height = config.height;
}

function barBorder() {
    wrapper.style.borderWidth = config.borderWidth;
    wrapper.style.borderStyle = config.borderStyle;
    wrapper.style.borderColor = config.borderColor;
    wrapper.style.borderRadius = config.borderRadius;
}

function showProgress() {
    if (config.showProgress == true) {
        document.querySelector('.pb-string').textContent = progressBar.progress;
    } else {
        document.querySelector('.pb-string').style.display = 'none';
    }
}

function fillBar() {
    progress.style.height = config.height;
    progress.style.borderRadius = config.borderRadius;
    progress.style.width =  progressBar.progress;
    progress.style.backgroundColor = progressBar.progressColor;
}