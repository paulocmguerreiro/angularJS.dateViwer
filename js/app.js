( function() {
	var app = angular.module("myApp", []);
	
	app.controller("ListController", function() {
		this.List = [
						{id: 1, name:'CD Case', 		price:10.5, stock:80},
						{id: 2, name:'Optic Mouse', 	price:15, 	stock:100},
						{id: 3, name:'LCD SCreen 17º', 	price:170, 	stock:20}
					];
	});
	
	
	app.constant("dateViewerConfig", {
										});
	
	app.directive("dateViewer",[ "dateViewerConfig", function (dateViewerConfig){
		return {
			restrict: 'E',
			templateUrl:"./directives/dateViewer.html",
			scope: {year: "=", 
					month: "=", 
					day: "="},
			controller: function($scope, progressBarConfig){
				//$scope.bar1color = angular.isDefined($scope.bar1color) ? $scope.bar1color : progressBarConfig.bar1color;
				//$scope.bar2color = angular.isDefined($scope.bar2color) ? $scope.bar2color : progressBarConfig.bar2color;
			}						
		};
	}]);
		
})();



