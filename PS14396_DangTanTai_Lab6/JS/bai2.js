function show() {
    vc = document.getElementById("vc");
    vc.style.display = (v == true) ? "" : "none";
}

function check() {
    success = true;
    announce = "";
    var product = document.getElementById("nameProduct");
    if (product.nodeValue.length == 0) {
        announce += "Vui lòng nhập tên sản phẩm <br>"
        success = true;
    }
    var money = document.getElementById("money");
    if (money.value == "") {
        announce += "Chưa nhập giá <br>";
        success = false;
    }
    if (parseInt(money.value) <= 0) {
        announce += "Số tiền phải lớn hơn 0";
        success = false;
    }
    if (isNaN(money.value) == true) {
        announce += "Nhập số l  phải nhập chữ <br>";
        success = false;
    }
    var loai=document.getElementById("loai");
if(loai.value=="abc")
{
    announce+="Chọn 1 cái";
    success=false;
}
if(radios[0].checked==false && !radios[1].checked==false)
{
    announce+="vui lòng chọn nơi giao";
    success=false;
}
    if (announce == "") {announce = "true";}
    document.getElementById("kq").innerHTML = announce;
return success;
}