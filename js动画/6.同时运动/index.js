var timer=null;
// startMove(obj,iTarget,{attr1:iTarget1,attr2:iTarget2})
function startMove(obj,json,fn)
{
     var flag=true;
     clearInterval(obj.timer);
     //var box=document.getElementById("box")
     obj.timer=setInterval(function(){
        for(var attr in json){


      //判断是透明度还是值，对其进行处理
        if(attr == 'opacity'){
            icu=Math.round(parseFloat(getStyle(obj,attr))*100);
        }else{
            icu=parseInt(getStyle(obj,attr))
        }
        //设置缓冲速度
        var speed=(json[attr]-icu)/30;
        if(speed>0){
            speed=Math.ceil(speed)
        }
        else{
            speed=Math.floor(speed)
        }
        //检测停止
        if(icu != json[attr] )
            {
                flag=false;
            }
        
            if(attr=='opacity')
            {
                obj.style.opacity = (icu+speed)/100;
 
            }
            else
            {
                obj.style[attr] = icu+speed+"px"
            }
        }

            if(flag)
            {
                clearInterval(obj.timer);
                if(fn){
                    fn();
                }
            }

 
     },30)
 }
 function getStyle(obj,attr){
    if(obj.currentStyle){
        return obj.currentStyle[attr]
    }
    else{
        return getComputedStyle(obj,false)[attr]
    }
 }