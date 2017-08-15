console.log('Loaded!');
var element= document.getElementById('maintext'
);
element.innertHTML='new value';
var img=document.getElementById('ajay');
marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+ 10;
    image.style.marginLeft=marginLeft+'px';
    
}
ajay.onclick=function(){
    var interval=setInterval(moveRight,100);
    
};