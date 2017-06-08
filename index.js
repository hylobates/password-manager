window.onload = function(){
    /*
        $(.class)
        $(#id)
    */
    function $(sel){
        var _sel = null;

        if(sel[0] === "#"){
            _sel = document.getElementById(sel.slice(1));
        }else if(sel[0] === "."){
            _sel = document.getElementsByClassName(sel.slice(1));
        }

        return _sel;
    }

    var indexPwd = $("#index-confirm");
    var PwdValue = $("#index-pwd");

    indexPwd.addEventListener("click",function(){
        console.log( PwdValue.value );
        PwdValue.value == "Pass10086" ? window.location.href='list.html' : PwdValue.value = "";
    });
}