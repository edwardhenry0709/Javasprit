function check()
{
var ht=document.frm1.ht.value;
var cmnd=document.frm1.cmnd.value;
var tinh=document.frm1.tinh.value;
var bosung=document.frm1.bosung.value;
var loi="";
if(ht.length<3||ht.length>30){loi+="Họ tên phải nhập từ 3->30 KÝ tự <br>";}
if(cmnd.length!=9){loi+="CMND phải đúng 9 kí tự <br>";}
var s=parseInt(cmnd);
if(tinh==0){loi+="Mày chưa chọn tỉnh";}
if(bosung.length<50 || bosung.length>1000){loi+="Hãy nhập thông tin bổ sung";}
if(loi.length>0){document.getElementById("loi").innerHTML=loi;}
return false;
}
function tat(){
    document.getElementById("loi").style.display="none";
}
function an()
{
    setTimeout("tat()", 5000);
}