const app = angular.module('loginApp', []);
app.controller('loginCtrl', function($scope){
    $scope.loginClick = function() {
        let accounts = localStorage["accounts"];
        if (accounts == undefined) accounts = [];
        else accounts = JSON.parse(accounts);
        let account = $scope.findAccount(accounts, $scope.username);
        if(account === null){
            alert("Login Failed: account does not exist");
            localStorage.removeItem("login");
            return;
        }
        if(account.password != $scope.password){
            alert("Login Failed: incorrect password");
            localStorage.removeItem("login");
            return;
        }
        localStorage["login"] = account.username;
        window.location.href = "landing.html";
    }
    $scope.findAccount = function(accounts, searchUsername){
        let output = null;
        accounts.forEach(account => {
            if(account.username === searchUsername) output = account;
        });
        return output;
    }
});