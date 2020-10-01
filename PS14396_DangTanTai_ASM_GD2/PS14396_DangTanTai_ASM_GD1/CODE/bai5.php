<?php
$x="Hello word"
echo $x;

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>bài 5</title>
    <script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.7.9/angular.min.js"></script>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
</head>
<style>
    #x ul
    {
    list-style: none;

    }
    #x li
    {
        display: inline-block;
        width: 200px;
        height: 20px;
        margin-left: 60px;
        line-height: 1px;

    }
    .hobies>input
    {
        margin: 10px;
        padding: 10px;

    }
    .hobies
    {
        color: red;
        font-weight: bold;
    }
    form
    {
        background-image: url(../hinh/5.jpg);
        font-weight: bold;
        color: wheat;
    }
    em
    {
        color: currentColor;
    }
    textarea
    {
        width: 500px    ;
    }

    button:hover
    {
        width: 200px;
        transition: ease 3s;
        color: black;
        background-color: wheat;

    }
</style>
<body ng-app="b3" background="../hinh/daniel-liang-2018-1-10-26.jpg">
    <form name="frm" class="col-5 mx-auto border border-primary" ng-controller="ctr1" action="/student/save" method="POST">
        <div class="form-group">
            <label>Mã sinh viên</label>
            <input name="msv" class="form-control bg-primary" ng-model="msv" required minlength="2" maxlength="10">
            <em ng-if="frm.msv.$invalid"  class="text-danger h6">Nhập mã sinh viên từ 2->10 ký tự</em>
        </div>
        <div class="form-group">
            <label>Họ tên sinh viên</label>
            <input name="tensv" class="form-control bg-warning" ng-model="tensv" type="text " required minlength="0" maxlength="20">
           <em ng-if="frm.tensv.$invalid || tensv>20" class="text-danger h6">Nhập tên sinh viên dưới 20 kí tự</em>
        </div>
        <div class="form-group">
            <label>Email</label>
            <input name="email" class="form-control" placeholder="Email" ng-model="email" autocomplete="off" required ng-pattern="/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/">
           <em ng-if="frm.email.$invalid || email<1  && email>51" class="text-danger h6">Nhập email từ 2 - 50 kí tự và phải định dạng theo kiểu '@'</em>
        </div>
        <div class="form-group">
            <label>Giới tính</label>
            <fieldset class="border border-secondary p-3">
                <input name="sex" type="radio" value="1" ng-model="sex"> Nam &nbsp;
                <input name="sex" type="radio" value="2" ng-model="sex"> Nữ
                <em ng-if="!sex" class="text-danger h6"><br>Nam hay nữ</em>
            </fieldset>

           </div>
           <div class="form-group">
            <label>Màu sắc</label>
            <fieldset class="border border-secondary p-3">
                <input value="sach" type="checkbox" ng-model="sach"> Đọc sách &nbsp;
                <input value="nhac" type="checkbox" ng-model="nhac"> Âm Nhạc &nbsp;
                <input value="an" type="checkbox" ng-model="anvat"> Ăn vặt &nbsp;
                <input value="dulich" type="checkbox" ng-model="dulich">Du lịch
                <em ng-if="!sach && !nhac && !dulich &&!anvat" class="text-danger h6"><br>Chọn sở thích đi !</em>
            </fieldset>
        </div>
        <div class="form-group">
                <label >Quốc tịch</label>
                <select name="country" ng-model="country">
                    <option value="0" name="country">Chọn</option>
                    <option value="1" name="country">Mỹ</option>
                    <option value="2" name="country">Việt nam</option>

                </select>
                <em ng-if="!country || country==0" class="text-danger h6">Hãy chọn Quốc Tịch</em>

        </div>
        <div class="form-group">
            <label >Nghi chú</label><br>
            <textarea name="note" cols="30" rows="5" class="f-ctrl" ng-model="note"></textarea>
            <em ng-if="frm.note.$invalid || note>200" class="text-danger h6">Nghi chú dưới 200 kí tự</em>

    </div>
    <div class="form-group">
        <button class="f-btn" onclick="check()" type="submit">Đăng ký</button>
        <span ng-if="frm.$valid">Thành công !!!!!</span>
    </div>
        </div>
        <span>$x</span>
    </form>
    <script>
        app= angular.module("b3",[]);
        app.controller("ctr1",xuly);
        function xuly($scope){

        }
        function controller($scope)
        {
            $scope.countries=["Việt nam", "Mỹ","Trung Quốc","Đài Loan","Canada"]
        }
    </script>
</body>
</html>