$(document).ready(function (event) {
	// body...
	
	// assign event handlers
	$('.category .category_tile').on('click', handleCategoryClick);
	$('.selected_categories .category_tile').on('click', handleSelectedCategoryClick);
	$('body').on('click', '.selected_categories .category_tile', removeSelectedItem);
	
	// funcs
	function handleSelectedCategoryClick(event) {
		// category_tile is target
		
	}

	function handleCategoryClick(event) {
		// category_tile is target

		// check if lowest level
		if ($(event.target).data('category-level') != 4){
			//switch to column view
			changeToColumnMode($(event.target));
		
			// display subcategories of target
			initSubcategory($(event.target).data('category-name'));
		}
		selectDeselect($(event.target));
	}

	function selectDeselect(tile) {
		// is tile selected?
		if (!tile.hasClass('selected')) {
			tile.addClass('selected').clone().appendTo('.selected_categories');
		}
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
	
	function removeSelectedItem(event) {
		// remove a selected item from the side/top list
		// remove selected class from clone source
		
		var catname = $(this).data('category-name');
		console.log('remove item '+catname);
		
		$(this).remove();
		
		var tounselect = $('.category_tile').filter('[data-category-name="'+catname+'"]');
		console.log('unselect '+tounselect);
		
		$('.category_tile').filter('[data-category-name="'+catname+'"]').removeClass('selected');
		
	}
	
	

	
})