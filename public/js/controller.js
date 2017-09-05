angular.module("testApp").controller("mainCtrl", function($scope, mainService){

$scope.numOne;
$scope.numTwo;

$scope.sum


$scope.add = (numOne, numTwo) => {
  $scope.sum = parseInt(numOne) + parseInt(numTwo);
  return $scope.sum
}

$scope.clear = () => {

     $scope.numOne = "";
     $scope.numTwo = "";
     $scope.sum = "";

};


//end of controller
});
