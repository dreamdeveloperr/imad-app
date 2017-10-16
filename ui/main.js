
var counter = 0;

button.onclick=function () {
    var button=document.getElementById('counter');
    counter=counter+1;
    var span=document.getElementById('count');

    span.innerHTMl=counter.toString();
};
