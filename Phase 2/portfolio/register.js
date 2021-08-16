const app = angular.module('registerApp', []);
app.controller('registerCtrl', function($scope){
    $scope.resetClick = function() {
        $scope.firstName = "";
        $scope.lastName = "";
        $scope.username = "";
        $scope.password = "";
    }
    $scope.registerClick = function() {
        if($scope.emptyInputs()){
            alert("Registration Failed: empty input(s)");
            return;
        }
        let accounts = localStorage["accounts"];
        if(accounts === undefined) accounts = [];
        else accounts = JSON.parse(accounts);
        let newAccount = $scope.createAccount($scope.firstName, $scope.lastName, $scope.username, $scope.password);
        if($scope.addAccount(accounts, newAccount)){
            localStorage["accounts"] = JSON.stringify(accounts);
            window.location.href = "login.html";
        }
        else alert("Registration Failed: username already in use");
    }
    $scope.addAccount = function(accounts, newAccount){
        let alreadyExists = false;
        accounts.forEach(account => {
            alreadyExists = alreadyExists || account.username === newAccount.username;
        });
        if(!alreadyExists) accounts.push(newAccount);
        return !alreadyExists;
    }
    $scope.createAccount = function(firstName, lastName, username, password) {
        return {
            firstName: firstName,
            lastName: lastName,
            username: username,
            password: password
        }
    }
    $scope.emptyInputs = function(){
        return $scope.firstName === undefined ||
            $scope.lastName === undefined ||
            $scope.username === undefined ||
            $scope.password === undefined;
    }
});