var app = angular.module('Register', ['ngStorage']);
app.controller('RegisterCtrl', function($scope,$http,$localStorage,$filter) {
  $scope.count=0;
  $scope.total=80;
	console.log("sad");
  $scope.isHidden=true;
  $scope.people;
  if ($scope.logged) {
    $scope.accOrCart="MY CART";
    }
  else {
    $scope.accOrCart="MY ACCOUNT";

  }
  $scope.$storage = $localStorage;

  $scope.login = function() {
    var url = '/practice/MyProject/Project/api/login.php';
    $http.get(url + "?username=" +$scope.username + "&password=" + $scope.password)
    .then(function (response) {
        $scope.logged=true;
        $localStorage.id=response.data[0]['id'];
        $localStorage.name=response.data[0]['name'];
        $localStorage.surname=response.data[0]['surname'];
        $localStorage.email=response.data[0]['email'];
        $localStorage.accOrCart="MY CART";
        $scope.username="";
        $scope.password="";
        console.log($scope.$storage.id);
        alert($scope.$storage.name +" "+ $scope.$storage.surname + ", You have succesfully logged on!");
        }, function (response) {

             console.log(response.data,response.status);
             alert("Error");

        });
  };

  $scope.get = function() {
    var url = "http://localhost/practice/MyProject/Project/api/get.php";
        $http.get(url + "?uid=" +$scope.$storage.id).then(function (response) {

            // on success
            $scope.products = response.data;

            console.log($scope.products)

        }, function (response) {

            // on error
            console.log(response.data,response.status);
            alert("Error");

        });
  };
  $scope.get_products = function() {
    var url = "http://localhost/practice/MyProject/Project/api/get_products.php";
        $http.get(url).then(function (response) {

            // on success
            $scope.all_products = response.data;

            console.log($scope.all_products);

        }, function (response) {

            // on error
            console.log(response.data,response.status);
            alert("Error");

        });
  };

  $scope.register = function() {
    var url = "http://localhost/practice/MyProject/Project/api/register.php";
    $http.get(url + "?newName=" +$scope.newName + "&newSurname=" + $scope.newSurname + "&newEmail="+ $scope.newEmail + "&newPassword=" + $scope.newPassword)
    .then(function (response) {// on success
      $scope.newName="";
      $scope.newSurname="";
      $scope.newEmail="";
      $scope.newPassword="";

            alert(response.data);
            console.log(response.data,response.status);
            //  $location.path('index.html')
             console.log("Success with angular");

        }, function (response) {

             console.log(response.data,response.status);
             alert("Error");
        });
  };
  $scope.add = function() {
    var url = "http://localhost/practice/MyProject/Project/api/add_product.php";
    $http.get(url + "?newPName=" +$scope.newPName + "&newPImg=" + $scope.newPImg + "&newPCode="+ $scope.newPCode + "&newPPrice=" + $scope.newPPrice)
    .then(function (response) {// on success
      $scope.newPName="";
      $scope.newPImg="";
      $scope.newPCode="";
      $scope.newPPrice="";

            // alert(response.data);
            console.log(response.data,response.status);
            //  $location.path('index.html')
             console.log("Success with angular");
            $scope.get_products();
        }, function (response) {

             console.log(response.data,response.status);
             alert("Error");
        });
  };
  $scope.add_to_cart = function(pr_id) {
    var url = "http://localhost/practice/MyProject/Project/api/add_to_cart.php";
    $http.get(url + "?pid=" +pr_id + "&uid=" + $scope.$storage.id)
    .then(function (response) {// on success
            alert(response.data);
            console.log(response.data,response.status);
            //  $location.path('index.html')
             console.log("Success with angular");
            $scope.get_products();
        }, function (response) {

             console.log(response.data,response.status);
             alert("Error");
        });
  };

  $scope.delete = function(id) {
    var url = "http://localhost/practice/MyProject/Project/api/delete.php";
        $http.get(url + "?pid=" +id).then(function (response) {

            $scope.products = response.data;

            console.log($scope.products)
            $scope.get();
        }, function (response) {

            console.log(response.data,response.status);
            alert("Error");
        });
  };
  $scope.pl=function () {
    $scope.count+=1;
    $scope.total-=1;
  }
  $scope.mn=function () {
    $scope.count-=1;
    $scope.total+=1;
  }

});
