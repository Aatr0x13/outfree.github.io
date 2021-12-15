window.onload = function () {
    //调用函数
    function touchStartFunc(evt) {
        // try {
        //     //evt.preventDefault(); //阻止触摸时浏览器的缩放、滚动条滚动等
        //     var touch = evt.touches[0]; //获取第一个触点
        //     var x = Number(touch.clientX); //页面触点X坐标 
        //     var y = Number(touch.clientY); //页面触点Y坐标 相对于当前页面视图
        //     //记录触点初始位置
        //     // console.log('page', document.body.clientHeight, y);
        //     if (y < document.body.clientHeight * 0.4) {
        //         // console.log('prevent')
        //         evt.preventDefault()
        //     }

        // } catch (e) {
        //     alert('touchStartFunc' + e.message);
        // }
    }

    function touchEndFunc(evt) {
        height = document.getElementById('scut').offsetHeight
        // console.log(document.getElementById('scut'))
        // height = document.getElementsByTagName('img')[0].heights
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop, height)
        // document.getElementById('out_reason').value = height + '\n' + document.documentElement.scrollTop + '\n' + document.body.scrollTop
        if (scrollTop < height) {
            document.getElementById('container').scrollIntoView()
        }
    }

    function recover() {
        height = document.getElementById('scut').offsetHeight
        // console.log(document.getElementById('scut'))
        // height = document.getElementsByTagName('img')[0].heights
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        console.log(window.pageYOffset, document.documentElement.scrollTop, document.body.scrollTop)
        // document.getElementById('out_reason').value = height + '\n' + document.documentElement.scrollTop + '\n' + document.body.scrollTop
        if (scrollTop < height) {
            document.getElementById('container').scrollIntoView()
            console.log('back')
        }
        console.log('scrollFunc')
    }

    function scrollFunc(evt) {
        let timer = null;
        console.log(1111)
        clearTimeout(timer);
        timer = setTimeout(recover, 300)
    }
    // 监听
    //document.addEventListener('touchmove', touchMoveFunc, { passive: false });
    document.addEventListener('touchstart', touchStartFunc, { passive: false });
    document.addEventListener('touchend', touchEndFunc, { passive: false });
    document.addEventListener('touchcancel', touchEndFunc, { passive: false });
    document.addEventListener('wheel', scrollFunc, { passive: false });

    // 存储cookies
    function setCookie() {
        //cname, cvalue, exdays
        exdays = 100
        //console.log(this)
        cname = this.id
        cvalue = escape(document.getElementById(this.id).value) //cookies保存中文 转码
        console.log(cvalue)
        
        var d = new Date();
        d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toGMTString();
        document.cookie = cname + "=" + cvalue + "; " + expires + '; path=/';
        console.log(cname + "=" + cvalue + "; " + expires);

        console.log(document.cookie)
    }
    document.getElementById('name').addEventListener('compositionend', setCookie, { passive: false })
    document.getElementById('name').addEventListener('input', setCookie, { passive: false })

    document.getElementById('num').addEventListener('input', setCookie, { passive: false })

    document.getElementById('school').addEventListener('compositionend', setCookie, { passive: false })
    document.getElementById('school').addEventListener('input', setCookie, { passive: false })

    document.getElementById('grade').addEventListener('input', setCookie, { passive: false })

    document.getElementById('person').addEventListener('compositionend', setCookie, { passive: false })
    document.getElementById('person').addEventListener('input', setCookie, { passive: false })

    document.getElementById('out_place').addEventListener('compositionend', setCookie, { passive: false })
    document.getElementById('out_place').addEventListener('input', setCookie, { passive: false })

    document.getElementById('out_reason').addEventListener('compositionend', setCookie, { passive: false })
    document.getElementById('out_reason').addEventListener('input', setCookie, { passive: false })

    // 写cookies
    var ca = document.cookie.split(';');
    console.log(ca)
    if (document.cookie != '') {
        for (var i = 0; i < ca.length; i++) {
            var content = ca[i].trim();
            console.log(content)
            cname = content.split('=')[0];
            cvalue = content.split('=')[1];
            try{
                console.log('cname is ', cname)
                document.getElementById(cname).value = unescape(cvalue);
            }
            catch{
                console.log(cname)
                console.log(unescape(cvalue))
                // 删除key值错误的cookie
                document.cookie = cname + "=" + cvalue + "; expires=" + new Date(0).toUTCString() + '; path=/';
                // document.getElementById('out_reason').value += cname;
                continue;
            }
        }
    }
}


