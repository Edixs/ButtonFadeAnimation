// 在index.html中需要一个id为"btn"的按钮元素

// 在index.js中添加以下代码

// 获取按钮元素
const btn = document.getElementById('btn');

// 添加点击事件监听器
btn.addEventListener('click', function() {
    // 淡出动画
    fadeOut(btn, 1000, function() {
        // 淡入动画
        fadeIn(btn, 1000);
    });
});

// 淡出动画函数
function fadeOut(element, duration, callback) {
    let opacity = 1;
    const interval = 50; // 每50ms执行一次
    const gap = interval / duration;

    const fadeEffect = setInterval(function() {
        if (opacity <= 0) {
            clearInterval(fadeEffect);
            element.style.opacity = 0;
            if (callback) {
                callback();
            }
        } else {
            opacity -= gap;
            element.style.opacity = opacity;
        }
    }, interval);
}

// 淡入动画函数
function fadeIn(element, duration) {
    let opacity = 0;
    const interval = 50; // 每50ms执行一次
    const gap = interval / duration;

    const fadeEffect = setInterval(function() {
        if (opacity >= 1) {
            clearInterval(fadeEffect);
            element.style.opacity = 1;
        } else {
            opacity += gap;
            element.style.opacity = opacity;
        }
    }, interval);
}
