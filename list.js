window.onload = function(){
    var data = [];

    if(!isNull(window.localStorage.getItem("data"))){
        // window.localStorage.setItem("data",[]);
        data = JSON.parse(window.localStorage.getItem("data"));
    }

    var panelColor = ['default','primary','success','info','warning','danger'];

    function isNull(vle){
        if(vle == null || vle == undefined || vle == ""){
            return true;
        }
        return false;
    }

    var listHtml = "";

    console.log(data);
    for(var i = 0 ,len = data.length; len > i; i++ ){
       listHtml += '<div class="panel panel-'+ panelColor[i % 6] +'"><div class="panel-heading">' + data[i].title + '<san class="icon-remove"></span></div><ul class="list-group"><li class="list-group-item"><div class="input-group"><span class="input-group-addon" id="sizing-addon1">账号</span><input type="text" class="form-control" disabled placeholder="txt" aria-describedby="sizing-addon1" value="' + data[i].name + '"></div></li><li class="list-group-item"><div class="input-group"><span class="input-group-addon" id="sizing-addon1">密码</span><input type="text" class="form-control" disabled placeholder="txt" aria-describedby="sizing-addon1" value="' + data[i].pwd + '"></div></li>'
       
       if(!isNull(data[i].other)){
            listHtml += '<li class="list-group-item">' + data[i].other + '</li>'
       }
       
       listHtml += '</ul></div>'
    }
    document.getElementById("body").innerHTML = listHtml;

    var listPanel = document.getElementsByClassName("panel");

    for(var j = 0; listPanel.length > j; j++){
        (function(arg){
            listPanel[arg].addEventListener("dblclick",function(){
                window.location.href='edit.html?' + arg;
            },false)
        })(j)
    }

    var addItem = document.getElementById("addItem");
    addItem.addEventListener("click",function(){
        window.location.href='edit.html?new';
    })

    var listRemove = document.getElementsByClassName("icon-remove");
    for(var i = 0; listRemove.length > i; i++){
        (function(arg){
            listRemove[arg].addEventListener("click",function(){
                console.log(data,"1");
                data.splice(arg,1);
                console.log(data);
                console.log(this.parentNode.parentNode);
                removeItem(this.parentNode.parentNode);
            },false)
        })(i)
    }

    var removeItem = function(item){
        document.getElementById("body").removeChild(item);
        window.localStorage.setItem("data",JSON.stringify(data));
    }
}