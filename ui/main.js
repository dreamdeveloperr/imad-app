console.log('Loaded!');
var element= document.getElementById('maintext'
);
element.innertHTML='new value';
var img=document.getElementById('ajay');
var marginLeft=0;
function moveRight(){
    marginLeft=marginLeft+1;
    img.style.marginLeft=marginLeft+'px';
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
    
};