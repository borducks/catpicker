$(document).ready(function (event) {
	// body...
	
	// assign event handlers
	$('.category.level_1 .category_tile').on('click', changeToColumnMode);
	
	
	
	// funcs
	
	function changeToColumnMode(event) {
		// body...
		var tile = $(event.target).parents('.category_tile');
		console.log($(event.target).parents('.category_tile'));
		
		category.parent().removeClass('floated');
	}
	
	// queue up next category
	
	// add tile to selected
	
	// remove tile from selected
	
	
	
})