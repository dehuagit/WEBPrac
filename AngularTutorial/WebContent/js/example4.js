
(function (){
	var app = angular.module('Store', []);
	
	app.controller('StoreController', function(){
		this.products = gems;	
	});
	
	app.controller('PanelController', function(){
		this.tab=1;
		
		this.selectTab = function(setTab){
			this.tab = setTab;
		};
		
		this.isSelected = function(checkTab){
			return this.tab === checkTab;
		};
		
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

	}];
	
	
})();