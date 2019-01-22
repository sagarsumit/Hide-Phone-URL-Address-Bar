/*! Normalized address bar hiding for iOS & Android */
(function( win ){
	var doc = win.document;
	if(!win.navigator.standalone && !location.hash && win.addEventListener ){
		win.scrollTo( 0, 1 );
		var scrollTop = 1,
			getScrollFromTop = function(){
				return win.pageYOffset || doc.compatMode === "CSS1Compat" && doc.documentElement.scrollTop || doc.body.scrollTop || 0;
			},
			bodycheck = setInterval(function(){
				if( doc.body ){
					clearInterval( bodycheck );
					scrollTop = getScrollFromTop();
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}	
			}, 15 );
		win.addEventListener( "load", function(){
			setTimeout(function(){
				if( getScrollFromTop() < 20 ){
					win.scrollTo( 0, scrollTop === 1 ? 0 : 1 );
				}
			}, 0);
		}, false );
	}
})( this );
