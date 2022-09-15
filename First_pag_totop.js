//获取滚动条
//获取div
var div=document.getElementById('top2_nav');
window.onscroll=function(){
var scroll=document.documentElement.scrollTop;
if(scroll>40){
        div.style.position='fixed';
        div.style.top=0;
        div.style.left=0;
        div.style.zIndex=5;
        // div.className='top2_nav1';
    }else{
        // div.className='top2_nav';
        div.style.position=''
    }
}
