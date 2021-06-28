function animate(obj, target, callback) {
    // 清除之前的定时器
    clearInterval(obj.timer);
    // 创建定时器
    obj.timer = setInterval(function () {
        var step = (target - obj.offsetLeft) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
        if (obj.offsetLeft == target) {
            clearInterval(obj.timer);
            if (callback) {
                callback();
            }
        }
        obj.style.left = obj.offsetLeft + step + 'px';
    }, 10);
}