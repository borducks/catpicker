$(document).ready(function (event) {
	// body...
	
	// assign event handlers
	$('.category .category_tile').on('click', handleCategoryClick);
	
	
	
	// funcs
	function handleCategoryClick(event) {
		// category_tile is target
		
		//switch to column view
		changeToColumnMode($(event.target));
		
		// display subcategories of target
		initSubcategory($(event.target).data('category-name'));
	}
	
	function changeToColumnMode(tile) {
		// switch from grid to column view
		hideAllChildren(tile.data('category-level'));
		tile.parent().removeClass('floated');
		// console.log(tile.data('category-name'));
	}
	
	// queue up next category
	function initSubcategory(cat_name) {
		console.log('reveal children of [data-category-parent="'+cat_name+'"]');
		console.log($('.category[data-category-parent="'+cat_name+'"]'));
		$('.category[data-category-parent="'+cat_name+'"]').addClass('floated').show();
	}
	
	function hideAllChildren(level) {
		console.log('hideAllChildren past level '+level);
		for (var i = level+1; i < 5; i++) {
			$('.category.level_'+i).hide();
		}
	}
		
	// add tile to selected
	
	// remove tile from selected
	
	

	
})