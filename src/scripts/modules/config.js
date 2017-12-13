function configurations() {
    barSize();
    barBorder();
    showProgress();
    fillBar();
}

var bar = document.querySelector('.pb-bar'),
    progress = document.querySelector('.pb-progress');
window.onload = configurations();

function barSize() {
    bar.style.width = config.width;
    bar.style.height = config.height;
}

function barBorder() {
    bar.style.borderWidth = config.borderWidth;
    bar.style.borderStyle = config.borderStyle;
    bar.style.borderColor = config.borderColor;
    bar.style.borderRadius = config.borderRadius;
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
    progress.style.width =  progressBar.progress;
}