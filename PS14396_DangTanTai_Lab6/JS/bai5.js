var x = Math.floor(Math.random() * 10) + 1,
    y = Math.floor(Math.random() * 10) + 1;
function ngaunhien() {
    x = Math.floor(Math.random() * 100) + 1,
    y = Math.floor(Math.random() * 100) + 1;
    document.getElementById("a").value = x;
    document.getElementById("b").value = y;
    document.getElementById("kq").focus();
}
function check() {
    document.getElementById("thongbao").style.display="";
    var tong=x+y;
    var z=document.getElementById("kq").value;
    if ((x+y)==z) {
        document.getElementById("thongbao").innerHTML="<p>Bé giỏi đấy!!</p>";
        document.getElementById("thongbao").innerHTML+="<p>Đáp án là: "+x+" + "+y+" = "+tong+"</p>";
    }else{
        document.getElementById("thongbao").innerHTML="<p>Sai rồi !</p>";
        document.getElementById("thongbao").innerHTML+="<p>Đáp án là: "+x+" + "+y+" = "+tong+"</p>";
    }
    setTimeout("lamlai()",1000);
}
function lamlai(){
    document.getElementById("thongbao").style.display="none";
    document.getElementById("thongbao2").style.display="";
    document.getElementById("thongbao2").innerHTML= "<p>Làm tiếp nào?! </p>";
    // document.getElementById("kq").focus;
    document.getElementById("kq").value= "";
    ngaunhien();
    setTimeout("tat()",2000);
}
function tat(){
    document.getElementById("thongbao2").style.display="none";
}
