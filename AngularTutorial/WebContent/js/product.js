(function(){
	var app = angular.module('store-products',[]);
	
	app.directive('productTitle',function(){
		return {
			restrict:'E',
			templateUrl: 'templete/product-title.html'
		};		
	});
	
	//sing dash-delimited attributes on DOM elements (e.g. ng-model).	
	app.directive('productPanel',function(){
		return {
			restrict:'E',
			templateUrl: 'templete/product-panel.html',
			controller:function(){
				this.tab=1;
				
				this.selectTab = function(setTab){
					this.tab = setTab;
				};
				
				this.isSelected = function(checkTab){
					return this.tab === checkTab;
				};
			},
			controllerAs:'panel',
			
		};		
	});
	
	
})();