angular.module('owner-Module', ['rush-Services', 'ngGeolocation', 'uiGmapgoogle-maps'])
.controller('ownerController', function($geolocation, $scope) {
	$scope.map = { center: { latitude: 69.42042069, longitude: 69.42042069 }, zoom: 9 };
         
         $geolocation.getCurrentPosition({
            timeout: 60000
         }).then(function(position) {
            $scope.myPosition = position;
         });

    });

