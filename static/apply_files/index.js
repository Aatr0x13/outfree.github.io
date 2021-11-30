window.onload = function () {
    function clickFunc1(evt) {
        var x = Number(evt.clientX); //页面触点X坐标 
        var y = Number(evt.clientY); //页面触点Y坐标 相对于当前页面视图
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        y = y + scrollY
        //记录触点初始位置
        // console.log('page', document.body.clientHeight, y);
        if (y > document.body.clientHeight * 0.45 && y < document.body.clientHeight * 0.6) {
            console.log('click111')
            document.getElementById('page1').style['display'] = 'none';
            document.getElementById('page2').style['display'] = 'inline';
            document.title = '华南理工大学'
        }       
    }

    function clickFunc2(evt) {
        console.log('click222')
        //var touch = evt.touches[0]; //获取第一个触点
        var x = Number(evt.clientX); //页面触点X坐标 
        var y = Number(evt.clientY); //页面触点Y坐标 相对于当前页面视图
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        var dis = y + scrollY
        //记录触点初始位置
        // console.log('page', document.body.clientHeight, y);
        console.log('*********', x, y, scrollY, document.body.clientHeight)
        if (x < document.body.clientWidth * 0.1 && y < document.body.clientHeight * 0.1) {
            document.getElementById('page1').style['display'] = 'inline';
            document.getElementById('page2').style['display'] = 'none';
        }
        else if(dis > document.body.clientHeight * 0.5 && dis < document.body.clientHeight * 0.55) {
            window.location.href = 'home.html#page3'
        }
    }
    document.getElementById('page1').addEventListener('click', clickFunc1, { passive: false })
    document.getElementById('page2').addEventListener('click', clickFunc2, { passive: false })
}