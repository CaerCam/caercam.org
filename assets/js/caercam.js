
(function() {

	var left = document.querySelector( '#l' ),
	   right = document.querySelector( '#r' );

	var clearPush = function() {
		right.classList.remove( 'push', 'pushed' );
		left.classList.remove( 'push', 'pushed' );
	};

	var pushL = function() {
		console.log( left.classList );
		if ( left.classList.contains( 'push' ) ) {
			clearPush();
		} else {
			left.classList.add( 'push' );
			right.classList.add( 'pushed' );
		}
	};

	var pushR = function() {
		console.log( right.classList );
		if ( right.classList.contains( 'push' ) ) {
			clearPush();
		} else {
			left.classList.add( 'pushed' );
			right.classList.add( 'push' );
		}
	};

	left.addEventListener( 'mouseenter', pushL );
	left.addEventListener( 'focusin', pushL );
	left.addEventListener( 'touchend', pushL );
	left.addEventListener( 'mouseleave', clearPush );
	left.addEventListener( 'focusout', clearPush );

	right.addEventListener( 'mouseenter', pushR );
	right.addEventListener( 'focusin', pushR );
	right.addEventListener( 'touchend', pushR );
	right.addEventListener( 'mouseleave', clearPush );
	right.addEventListener( 'focusout', clearPush );

	var closeSidebar = function() {

		sidebar.classList.remove( 'opened' );
		wrapper.classList.remove( 'pushed' );
		burger.classList.remove( 'active' );

		wrapper.style.left = '0px';
		wrapper.removeEventListener( 'click', closeSidebar );
	};

	var openSidebar = function() {

		if ( sidebar.classList.contains( 'opened' ) ) {
			closeSidebar();
		} else {
			sidebar.classList.add( 'opened' );
			wrapper.classList.add( 'pushed' );
			burger.classList.add( 'active' );

			wrapper.style.left = sidebar.offsetWidth + 'px';
		}
	};

	var burger = document.querySelector( '#burger' ),
	   wrapper = document.querySelector( '#wrapper' ),
	   sidebar = document.querySelector( '#sidebar' );

	burger.addEventListener( 'click', openSidebar );
})();
