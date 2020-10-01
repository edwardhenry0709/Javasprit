function check()
{
  var arr =document.getElementsByName("me");
  var kq=document.getElementById("ketqua");
  var dem=0;
  kq.innerHTML="";
  var i;
  for(i=0;i<arr.length;i++)
  {
      if(arr[i].checked)
      {
          var v=arr[i].value;
          var chu=document.createTextNode(v);
          var tagp=document.createElement("p");
          tagp.appendChild(chu);
          kq.appendChild(tagp);
          dem++;
      }
  }
  if(dem>0)
  {
      kq.className="abc";
  }
  else
  {
      kq.innerHTML="Bạn chưa chọn mục nào";
      kq.className="xyz";
  }


}