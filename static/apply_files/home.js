window.onload = function () {
    var iswx = 1;
    function isWeiXin() {
        var ua = window.navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == 'micromessenger') {
            return true; // 是微信端
        } else {
            return false;
        }
    }

    if (isWeiXin() == false){
        document.getElementById('scut').style.display = 'none';
        iswx = 0;
    }

    
    var is_img_hidden = 0
    function clickFunc(evt) {
        var x = Number(evt.clientX); //页面触点X坐标 
        var y = Number(evt.clientY); //页面触点Y坐标 相对于当前页面视图
        var scrollY = document.documentElement.scrollTop || document.body.scrollTop;
        console.log('-------', y, scrollY, document.body.clientHeight)
        y = y + scrollY - document.getElementById('scut').offsetHeight
        //记录触点初始位置
        // console.log('page', document.body.clientHeight, y);
        if (y > document.body.clientHeight * 0.25 && y < document.body.clientHeight * 0.35 && x < document.body.clientWidth * 0.4 && x > document.body.clientWidth * 0.1) {
            // console.log('prevent')
            // evt.preventDefault()
            window.location.href = 'apply.html#container'
        }     
    }

    //调用函数
    function touchStartFunc(evt) {

    }

    function touchEndFunc(evt) {
        if (iswx == 0){
            return;
        } 
        height = document.getElementById('scut').offsetHeight
        // console.log(document.getElementById('scut'))
        // height = document.getElementsByTagName('img')[0].heights
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        if (scrollTop > height && is_img_hidden == 0){
            document.getElementById('scut').style.display = 'none';
            is_img_hidden = 1
        }
        if (scrollTop < height && is_img_hidden == 0) {
            setTimeout(function(){
                document.getElementById('page3').scrollIntoView();
            }, 100)         
        }
    }

    // function recover() {
    //     height = document.getElementById('scut').offsetHeight
    //     // console.log(document.getElementById('scut'))
    //     // height = document.getElementsByTagName('img')[0].heights
    //     var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    //     console.log(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
    //     // document.getElementById('out_reason').value = height + '\n' + document.documentElement.scrollTop + '\n' + document.body.scrollTop
    //     if (scrollTop < height) {
    //         document.getElementById('page3').scrollIntoView()
    //         console.log('back')
    //     }
    //     console.log('scrollFunc')
    // }

    // function scrollFunc(evt) {
    //     let timer = null;
    //     console.log(1111)
    //     clearTimeout(timer);
    //     timer = setTimeout(recover, 300)
    // }
    // 监听
    //document.addEventListener('touchmove', touchMoveFunc, { passive: false });
    document.getElementById('page3').addEventListener('click', clickFunc, { passive: false })
    document.addEventListener('touchstart', touchStartFunc, { passive: false });
    document.addEventListener('touchend', touchEndFunc, { passive: false });
    document.addEventListener('touchcancel', touchEndFunc, { passive: false });
    //document.addEventListener('wheel', scrollFunc, { passive: false });

    function showImg(){
        if (iswx == 0){
            return;
        } 
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop == 0 && is_img_hidden == 1){
            document.getElementById('scut').style.display = 'block';
            is_img_hidden = 0;
            document.getElementById('page3').scrollIntoView()
        }
    }
    setInterval(showImg, 100)
}