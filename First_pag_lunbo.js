/* --------nav_click-------- */
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



/* --------nav_click-------- */
/* var ul=document.getElementById('nav_click');
var lis=ul.children;
    for(var i=0;i<lis.length;i++){
        function mm(i){
            lis[i].onclick=function (){
            lis[i].className='nav_click';
            }
        }
        mm(i);
    }

        for(var i=1;i<lis.length;i++){
            function clearOnclick(i){
            lis[i].className='';
            }
            clearOnclick(i)
        } */
    
/* --------ftrans点击-------- */
var x=1;
var pos=document.getElementById('ftrans');
var rot=document.getElementById('rot');
function roro(x) {
        pos.onclick=function (){
        var trans=document.getElementById('trans');
        if(x%2!=0){
            trans.className='trans';
            rot.className='rot';
        }
        else{
            trans.className='retrans';
            rot.className='rott';
        }
        x++;
    }
}
roro(x);