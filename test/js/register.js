
function getSelect(){

    var ele=document.getElementById("postFrom");
    for(var i=0;i<ele.children.length;i++) {
       if(ele.children[i].children[0].type!="submit"){
           var obj=ele.children[i].children[0];
            obj.onclick=function (ev) {
                this.select();
            }
          obj.onmouseover=function(ev){
           if(this.name=="user"){
             this.title="请输入6-18位中文数字字符，不能使用特殊字符";
           }
           if(this.name=="password"){
               this.title="请输入6-18位中文数字字符，不能使用特殊字符"
           }
              //特效
              this.parentElement.style.marginBottom="3px";

              this.style.width=this.style.width+1;
           this.style.border="1px solid #111";
          }


        }
    }
}

/**
 * 验证信息
 */
function evaluateUser(){

   var user= document.getElementById("user");
   document.getElementsByTagName()
   var length=user.value.trim().toString();
   if(length<6||length>18){
   }
}

function get(){

    var ele=document.forms[0].elements["text_title"];
    ele.title="输入文章标题";
    ele.onfocus=function(ev){
        this.select();
    }
    ele.onblur=function(ev){
        var length=ele.value.trim().length;
        if(length>20||length<1){
            alert("标题长度不合法");
        }
        this.backgroundColor="#ff0f00";
    }




}






