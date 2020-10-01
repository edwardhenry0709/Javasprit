var solan = 0;
var ptb2 = {
    a: 0,
    b: 0,
    c: 0,
    giai: function () {
        this.a = document.getElementById("a").value;
        this.b = document.getElementById("b").value;
        this.c = document.getElementById("c").value;
        if ((this.a == "") == true || (this.b == "") == true ||
            (this.c == "") == true) {
            alert("Thiếu tìm thấy giá trị!\nCác giá trị sẽ được thêm ngẫu nhiên");
            ngauNhien();
        }
        if ((this.a < 0) == true || (this.a > 10) == true ||
            (this.b < 0) == true || (this.b > 10) == true ||
            (this.c < 0) == true || (this.c > 10) == true) {
            alert("Xin hãy chỉ nhập từ 0-10!\nTuy nhiên,phép toán của bạn vẫn được thực thi :)))");
        }
        if (this.a == 0) if (this.b == 0) if (this.c == 0) {
            var str = this.c + " = 0";
            document.getElementById("ptr").innerHTML = str;
            document.getElementById("kq").innerHTML = "Phương trình luôn đúng";
        } else {
            var str = this.c + " = 0";
            document.getElementById("ptr").innerHTML = str;
            document.getElementById("kq").innerHTML = "Phương trình vô lí";
        } else {
            var str = this.b + "x + " + this.c + " = 0";
            document.getElementById("ptr").innerHTML = str;
            var x = -this.c / this.b;
            document.getElementById("kq").innerHTML = "Phương trình có 1 nghiệm: x= " + x.toFixed(2);
        }
        else {
            var str = this.a + "x<sup>2</sup> + " + this.b + "x + " + this.c + " = 0";
            document.getElementById("ptr").innerHTML = str;
            var delta = this.b * this.b - 4 * this.a * this.c;
            if (delta < 0) {
                document.getElementById("kq").innerHTML = "Phương trình vô nghiệm";
            } else if (delta == 0) {
                xk = -this.b / 2 * this.a;
                document.getElementById("kq").innerHTML = "Phương trình có nghiệm kép: x<sub>1</sub>=x<sub>2</sub>= " + xk.toFixed(2);
            }
            else {
                x1 = -this.b + Math.sqrt(delta) / 2 * this.a;
                x2 = -this.b - Math.sqrt(delta) / 2 * this.a;
                document.getElementById("kq").innerHTML = "Phương trình có 2 nghiệm phân biệt: <br>x<sub>1</sub>= " + x1.toFixed(2) + "<br>x<sub>2</sub>= " + x2.toFixed(2);
            }
        }
        solan++;
        document.getElementById("solan").innerHTML = solan;
        document.getElementById("giai").disabled = true;
    }
};

function ngauNhien() {
    ptb2.a = Math.floor(Math.random() * 9);
    ptb2.b = Math.floor(Math.random() * 9);
    ptb2.c = Math.floor(Math.random() * 9);
    document.getElementById("a").value = ptb2.a;
    document.getElementById("b").value = ptb2.b;
    document.getElementById("c").value = ptb2.c;
    document.getElementById("giai").disabled = false;
}

function moKhoa() {
    document.getElementById("giai").disabled = false;
}

var dh = null;
function ngay() {
    var date = new Date();
    var days = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    document.getElementById("ngay").innerHTML = days[date.getDay()] + " " +
        date.getDate() + "/" + date.getMonth() + "/" + date.getFullYear();
}
function gio() {
    var date = new Date();
    document.getElementById("gio").innerHTML = date.getHours() + ":" +
        date.getMinutes() + ":" + date.getSeconds();
}
dh = setInterval("ngay(),gio()", 1000);
function startstopDH() {
    if (dh == null) dh = setInterval("ngay(),gio()", 1000);
    else {
        clearInterval(dh);
        dh = null;
    }
}
var str = this.a + "x<sup>2</sup> + " + this.b + "x + " + this.c + " = 0";
document.getElementById("ptr").innerHTML = str;
var delta = this.b * this.b - 4 * this.a * this.c;

