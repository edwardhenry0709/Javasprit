function them(button)
{
    var row=button.parentElement.parentElement.cloneNode(true);
    var btnXoa=row.getElementsByTagName("button")[0];
    btnXoa.innerText="Xóa";
    document.getElementById("cart").appendChild(row);
    tinhtong();
}
function xoa(button)
{
    var row=button.parentElement.parentElement;
    document.getElementById("cart").removeChild(row);
    tinhtong();
}
function tinhtong()
{
    var cart=document.getElementById("cart");
    var rows=cart.getElementsByTagName("tr");
    var tong=0;
    for(var i=0;i<rows.length;i++)
    {
        var price=rows[i].children[2].innerText;
        price=parseInt(price);
        tong+=price;
    }
    document.getElementById("tong").innerText=tong;
}
document.getElementById("cart").style.display="none";
document.getElementById("cart").style.display="";
function an(button)
{
var x=button.parentElement.parentElement;
x.getElementsByTagName("button")[0].disabled=true;
}
function daotao(obj)
{
var row=obj.parentElement.parentElement;
var btn=row.getElementsByTagName("button")[0];
btn.disabled=!btn.disabled;
}