window.onload = function(){
    function clickFunc(evt){
        window.location.href = 'apply.html#container'
    }
    document.getElementById('page3').addEventListener('click', clickFunc, {passive: false})
}