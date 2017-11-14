(function($)  {

	var $blocks = $( '.block' ),
	    $anchor = $( '.anchor' ),
	    $toggle = $( '#menu-toggle' ),
	      $menu = $( '#menu' ),
	    wheight = window.innerHeight;

	var resize = function() {

		$blocks.each(function() {
			$( this ).css( { minHeight: wheight } );
		});
	};

	var anchor = function( anchor ) {

		var $block = $( anchor );

		if ( undefined == $block )
			return false;

		var offset = $block.offset().top;
		$( 'html,body' ).animate( { scrollTop: offset }, 500 );
	};

	$( window ).on( 'resize', resize() );
	$( document ).on( 'ready', resize() );

	$anchor.on( 'click', function( e ) {
		e.preventDefault();
		anchor( this.hash );
	});

	$toggle.on( 'click', function( e ) {
		e.preventDefault();
		$menu.toggleClass( 'active' );
	});
	
})(jQuery);
