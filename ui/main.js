console.log('Loaded!');
var element= document.getElementById('maintext'
);
element.innertHTML='new value';
var img=document.getElementById('ajay');
var marginLeft=0;
function moveRight(){
    img.style.marginLeft=marginLeft+'1px';
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
    
};