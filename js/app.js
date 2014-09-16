angular.module("instaSearcherApp", []).
controller("searchController", function($scope, $http){
	
	$scope.tag= "bikes";

	$scope.message = "";

	$scope.results = [];

	$scope.search = function() {

		var params = {client_id: '852ef9dc71b54c159aa5bfe6348afebd', callback: 'JSON_CALLBACK'};
		var headers =  {'Content-type': 'application/json', 'Accept': 'application/json'};

		var getUrl = "https://api.instagram.com/v1/tags/"+$scope.tag + "/media/recent";
		$scope.searchMessage = 'Searching Instagram for photos tagged with \"' + $scope.tag + '\"';
		
		$http.jsonp(getUrl, {
            params: {
                'client_id': '852ef9dc71b54c159aa5bfe6348afebd',
                'callback': 'JSON_CALLBACK'
            }
        })
        .success(function(response) {
            //$scope.model.searchResults = envelope.data;
            $scope.results = response.data;
            $scope.message = 'We found ' + response.data.length + ' results for \"' + $scope.tag + '\"';
            
        })
        .error(function() {
            $scope.model.message = 'An error occurred retrieving photos from Instagram.';
        });
	};
});