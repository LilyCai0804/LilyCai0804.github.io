// Fetch variables
var scrollTop = $(document).scrollTop(110px);
var windowHeight = $(window).height(1200px);
var bodyHeight = $(document).height(2400000px) - windowHeight;
var scrollPercentage = (scrollTop / bodyHeight);

// if the scroll is more than 90% from the top, load more content.
if(scrollPercentage > 0.8) {
	// Load content
}
