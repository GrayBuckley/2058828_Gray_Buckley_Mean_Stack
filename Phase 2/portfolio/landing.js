const app = angular.module('landingApp', []);
app.controller('landingCtrl', function($scope){
    $scope.findAccount = function(accounts, searchUsername){
        if(searchUsername === undefined || accounts === undefined) return null;
        let output = null;
        accounts.forEach(account => {
            if(account.username === searchUsername) output = account;
        });
        return output;
    }
    $scope.account = $scope.findAccount(JSON.parse(localStorage["accounts"]), localStorage["login"]);
    $scope.onLoad = function(){
        $scope.account.contacts.forEach(contact => {
            $scope.addTableRow(contact.name, contact.number);
        });
    }
    $scope.addTableRow = function(name, number){
        const nameCell = document.createElement("td");
        nameCell.innerHTML = name;
        const priceCell = document.createElement("td");
        priceCell.innerHTML = number;
        const newRow = document.createElement("tr");
        newRow.appendChild(nameCell);
        newRow.appendChild(priceCell);
        document.getElementById("portfolioTable").appendChild(newRow);
    }
    $scope.addContact = function(name, number){
        $scope.addTableRow(name, number);
        let contact = {name: name, number: number};
        $scope.account.contacts.push(contact);
        let accounts = JSON.parse(localStorage["accounts"]);
        $scope.findAccount(accounts, $scope.account.username).contacts.push(contact);
        localStorage["accounts"] = JSON.stringify(accounts);
    }
    $scope.saveClick = function(){
        $scope.addContact($scope.contactName, $scope.phoneNum);
    }
    $scope.onLoad();
});