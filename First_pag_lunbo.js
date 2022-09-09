var l_button=document.getElementById('l_button');
var r_button=document.getElementById('r_button');
var point=document.getElementById('point');
var point_s=point.children;
var img=document.getElementById('cycle_img');
var imgs=img.children;
var n=0;
//按钮切换
l_button.onclick=function (){
    n--;
    if(n<0){
        n=imgs.length-1;
    }
    run();
}
r_button.onclick=function (){
    n++;
    if(n==imgs.length-1){
        n=0;
    }
    run();
}
//小圆点切换
for(var i=0;i<point_s.length;i++){
    function mm(i){
        point_s[i].onclick=function (){
        n=i;
        run();
    }
  }
  mm(i);
}
//切换
function run() {
    for(var i=0;i<imgs.length;i++){
        imgs[i].className='';
        point_s[i].className='';
    }
    imgs[n].className='imcurrent';
    point_s[n].className='poicurrent';
}