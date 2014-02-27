// data for the categories

var data = {
	
	top: [
	{
		title: "Cats",
		children: [
		{
			title: "Tabbies"
		},
		{
			title: "Persian"
		},
		{
			title: "Grooming"
		}
		
		]
	},
	{
		title: "Fruit",
		children: []
	},
	{
		title: "Celebrities",
		children: []
	},
	{
		title: "Space",
		children: []
	}
	
	]
};

var flatdata = [{
	parent: null,
	children: ["Cats", "Fruit", "Celebs", "Space"]
}, {
	parent: "Cats",
	children: ["Tabbies", "Persian", "Grooming"]
}, {
	parent: "Fruit",
	children: ["Apples", "Pears", "Oranges", "Tomatoes"]
}, {
	parent: "Celebs",
	children: ["Movie Stars", "Drunks", "Reality, but not"]
}, {
	parent: "Space",
	children: ["Planets", "Travel", "Stars", "Galaxies", "Aliens"]
}, {
	parent: "Tabbies",
	children: ["Grey Tabbies", "Tabbies in the news"]
}
];

