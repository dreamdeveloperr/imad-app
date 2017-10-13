console.log('Loaded!');
var element= document.getElementById('maintext'
);
element.innertHTML='new value';
var img=document.getElementById('ajay');
var marginLeft;
function moveRight(){
    
    img.style.marginLeft='100px';
    
}
img.onclick=function(){
    var interval=setInterval(moveRight,50);
    
};