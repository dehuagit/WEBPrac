
(function (){
	var app = angular.module('Store', []);
	
	app.controller('StoreController', function(){
		this.products = gems;	
	});
	
	var gems = [
	{
		name:'Dodecahedron',
		price: 2.95,
		description: '...',
		canPurchase: true,
	},
	{
		name:'Pentagnoal Gem',
		price: 5.95,
		description: '...',
		canPurchase: false,
	}];
	
	
})();
