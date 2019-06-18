// Initialize your app
var myApp = new Framework7({
	root:'#app',
	theme: 'md', //ios, md, auto
    modalTitle: 'Framework7', 	//title for modals
	panel: {
    	swipe: 'left',
  	},
	cache:false,
	pushState:false,
	swipeBackPage:true,
	material: true,
	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/list/',
    	url: 'list.html',
    	name: 'list',
  		},
		
		{
		path: '/cards/',
    	url: 'cards.html',
    	name: 'cards',
  		},
		
		
		{
		path: '/info/',
    	url: 'info.html',
    	name: 'info',
  		},
		
		
		{
		path: '/index/',
    	url: 'index.html',
    	name: 'index',
  		},
		
		{
		path: '/aboutus/',
    	url: 'aboutus.html',
    	name: 'aboutus',
  		},
		
	{
		path: '/adriana/',
    	url: 'adriana.html',
    	name: 'adriana',
  		},
		
		
		
	]
});

// Export selectors engine
var $$ = Dom7;





 

