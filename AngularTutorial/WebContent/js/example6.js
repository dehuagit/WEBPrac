
(function (){
	var app = angular.module('Store', []);
	
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
	
	
	
	app.controller('StoreController', function(){
		this.products = gems;	
	});
	
	
	
	app.controller("ReviewController", function() {
		this.review={};
		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review={};
		}
	});
	
	
	var gems = [
	{
		name:'Dodecahedron Gem',
		price: 2.95,
		description: '...',
		canPurchase: true,
		images:[
		        {full:'img/01_full.png',
		         thumb:'img/01_thumb.png'}
		        ],
		 reviews:[
		    {stars: 5,
		     body:"I love this product!",
		     author: "joe@thomas.com"
		    },
		    {
		    	stars: 1,
		    	body:"This product sucks",
		    	author:"tim@hater.com"
		    }
		 ]
	},
	{
		name:'Pentagnoal Gem',
		price: 5.95,
		description: '...',
		canPurchase: false,
		images:[
		        {full:'img/01_full.png',
		         thumb:'img/01_thumb.png'}
		        ],
        reviews:[
     		    {stars: 5,
     		     body:"I love this product!",
     		     author: "joe@thomas.com"
     		    },
     		    {
     		    	stars: 1,
     		    	body:"This product sucks",
     		    	author:"tim@hater.com"
     		    }
     		 ]

	}];
	
	
})();
