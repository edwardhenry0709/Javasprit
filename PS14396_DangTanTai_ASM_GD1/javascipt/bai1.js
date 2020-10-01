function time()
{
    var now=new Date();
var time=now.getHours()+":"+now.getMinutes()+":"+now.getSeconds();
var date=now.getDay()+"-"+now.getMonth()+"-"+now.getFullYear();
var datetime=date+" <br>"+time;
document.getElementById("t").innerHTML=datetime;
console.log(datetime);
}
setInterval("time()",1000);