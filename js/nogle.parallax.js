
(function( $ ){
	var $window = $(window);
	var windowHeight = $window.height();

	$window.resize(function () {
		windowHeight = $window.height();
	});
	
	
	
	
	//parallax with no fixed background
	$.fn.BgParallax = function(xpos, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || xpos === null) xpos = "50%";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);
				
				if ( top < pos + windowHeight && top + height > pos ) {
					var diff = top - (pos + windowHeight),
						max = height + windowHeight,
						itpldiff = 150 * (diff/max);
					
					$element.css('backgroundPosition', xpos + " " + (itpldiff * speedFactor) + "px");

				}	
				
			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};

	//parallax by adjusting MarginTop
	$.fn.parallaxMarginTop = function(dMarginTop, speedFactor, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || dMarginTop === null) dMarginTop = "10px";
		if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;
		
		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					return;
				}
				$this.css('margin-top', mtop  + Math.round((firstTop - pos) * speedFactor) + "px");

			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
	//parallax by adjusting css transY
	$.fn.parallaxTransY = function( speedFactor,unit, outerHeight) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || speedFactor === null) speedFactor = 1;
		if (arguments.length < 2 || unit === null) unit = "%";
		if (arguments.length < 3 || outerHeight === null) outerHeight = true;

		if (outerHeight) {
			getHeight = function(jqo) {
				return jqo.outerHeight(true);
			};
		} else {
			getHeight = function(jqo) {
				return jqo.height();
			};
		}
		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);
				

				if ( top < pos + windowHeight && top + height > pos ) {
					var diff = top - (pos + windowHeight),
						max = height + windowHeight,
						itpldiff = 150 * (diff/max);

					$element.css("transform", "translateY(" + (itpldiff * speedFactor)+ unit+")");

				}


			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
	
	
	$.fn.scrollfadeIn = function(delayOffset, autoFadeOut) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		
		//hidden element
		$this.addClass('visibility');
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		
		getHeight = function(jqo) {
			return jqo.outerHeight(true);
		};
		
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || delayOffset === null) delayOffset = 0;
		if (arguments.length < 2 || autoFadeOut === null) autoFadeOut = true;

		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					if(autoFadeOut)$(this).removeClass("animated fadeIn");
					return;
				}
								
				
				var bottom_of_object = $(this).offset().top + height;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
            
                // If the object is completely visible in the window, fade it it 
                if (bottom_of_window > bottom_of_object + delayOffset) {
                    $(this).addClass("animated fadeIn");
                }
				

			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
	
	$.fn.scrollfadeInUp = function(delayOffset, autoFadeOut) {
		var $this = $(this);
		var getHeight;
		var firstTop;
		var paddingTop = 0;
		
		
		//hidden element
		$this.addClass('visibility');
		
		//get the starting position of each element to have parallax applied to it		
		$this.each(function(){
		    firstTop = $this.offset().top;
		});

		
		getHeight = function(jqo) {
			return jqo.outerHeight(true);
		};
		
			
		// setup defaults if arguments aren't specified
		if (arguments.length < 1 || delayOffset === null) delayOffset = 0;
		if (arguments.length < 2 || autoFadeOut === null) autoFadeOut = true;

		
		// function to be called whenever the window is scrolled or resized
		function update(){
			var pos = $window.scrollTop();				

			$this.each(function(){
				var $element = $(this);
				var top = $element.offset().top;
				var height = getHeight($element);

				// Check if totally above or totally below viewport
				if (top + height < pos || top > pos + windowHeight) {
					if(autoFadeOut)$(this).removeClass("animated fadeInUp");
					return;
				}
								
				
				var bottom_of_object = $(this).offset().top + height;
                var bottom_of_window = $(window).scrollTop() + $(window).height();
            
                // If the object is completely visible in the window, fade it it 
                if (bottom_of_window > bottom_of_object + delayOffset) {
                    $(this).addClass("animated fadeInUp");
                }
				

			});
		}		

		$window.bind('scroll', update).resize(update);
		update();
	};
	
	
})(jQuery);
