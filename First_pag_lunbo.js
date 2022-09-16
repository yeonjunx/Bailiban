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



/* --------ftrans点击-------- */
var x=1;
var pos=document.getElementById('ftrans');
var perr=document.getElementById('perr');
var rot=document.getElementById('rot');
var per=document.getElementById('per');
var cor=document.getElementById('cor');
var trans=document.getElementById('trans');
pos.onclick=function (){
    if(x%2!=0){
        rrun();
    }
    else{
        lrun();
    }
    x++;
}

function rrun(){
    trans.className='trans';
    rot.className='rot';
}
function lrun(){
    trans.className='retrans';
    rot.className='rott';
}
per.onclick=function() {
    perr.innerText=per.innerText;
    per.style.color='green';
    cor.style.color='#333';
    lrun();
    x++;
}
cor.onclick=function() {
    perr.innerText=cor.innerText;
    per.style.color='#333';
    cor.style.color='green';
    lrun();
    x++;
}
