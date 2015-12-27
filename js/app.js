'use strict';

angular.module('myApp', ['file-model'])
.controller('DemoCtrl', function ($scope, $http) {
	
	$scope.file = null;	
    
		
    $scope.upload = function () {
		//console.log($scope.file); // This is where the file is linked to.
		var file =  $scope.file;// get from file input
		var backendUrl = 'http://localhost:9292/api/v1/uploader';
		var fd = new FormData();
		
		fd.append('file', file);

		$http.post(backendUrl, fd, {
		    // this cancels AngularJS normal serialization of request
		    transformRequest: angular.identity,
		    // this lets browser set `Content-Type: multipart/form-data` 
		    // header and proper data boundary
		    headers: {'Content-Type': undefined}
		})

		.success(function(){
		    //file was uploaded
		})

		.error(function(error){
			console.log(error);
		    //something went wrong 
		});
    };
	
  });
