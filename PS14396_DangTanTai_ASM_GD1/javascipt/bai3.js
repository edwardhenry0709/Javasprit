function tongtien() {
    var arrChon = document.getElementsByName("chon");
    var arrSL = document.getElementsByName("soluong");
    var arrGia = document.getElementsByName("gia");
    var tien = 0;
    for (var i = 0; i < arrSL.length; i++) {
        if (arrChon[i].checked == true) {
            var soluong = parseInt(arrSL[i].value);
            var gia = parseInt(arrGia[i].innerText);
            tien += soluong * gia;
        }else
        {
            tien+=0;
        }
    }
    document.getElementById("tinhtong").innerText = tien;
}

function thanhtien(i) {
    var arrChon = document.getElementsByName("chon");
    var arrSL = document.getElementsByName("soluong");
    var arrGia = document.getElementsByName("gia");
    var tien = 0;

    if (arrChon[i].checked == true) {
        var soluong = parseInt(arrSL[i].value);
        var gia = parseInt(arrGia[i].innerText);
        tien += soluong * gia;
    }


    document.getElementById("thanhtien" + i ).innerText = tien;
}

function check(i) {
    var arrSL = document.getElementsByName("soluong");
    arrSL[i].disabled = !arrSL[i].disabled;
    tongtien();
    thanhtien(i);
}

function doimucgia() {
    var arrGia = document.getElementsByName("gia");
    var obj = document.getElementById("mucgia");
    var gia, i;
    mucdangchon = obj.value;
    for (i = 0; i < arrGia.length; i++) {
        gia = parseInt(arrGia[i].innerText);
        if (gia <= mucdangchon) {
            arrGia[i].parentNode.parentNode.style.display = "";
        } else {
            arrGia[i].parentNode.parentNode.style.display = "none";
        }
        tongtien();
    }
}
