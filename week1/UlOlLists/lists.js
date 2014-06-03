"use strict"

var ul = function(items) {
	return ulol(items, "ul", "");
};

var ol = function(items) {
	return ulol(items, "ol", "");
};

var ulol = function(items, type, space) {
	var result = "<" + type + ">\n";
		items.forEach(function (item) {
			result += space + "  <li>" + item["label"];

			if (item["children"]) {
				result += "\n\t" + space + ulol(item["children"], type, space + "\t");
				result += space + "  </li>\n";
			}
			else {
				result += "</li>\n";
			}
		});
	return result + space + "</" + type + ">\n";
}


//------------------------------------------------------------------------------------


var items1 = [{ "label" : "Item 1"},
             { "label" : "Item 2", "children" : [
                {
                    "label" : "Level 2 of Item 2", "children" : [
                    {
                    	"label" : "Level 3 of Item 2" 
                    }]
                },
                {
                    "label" : "Another level 2"
                }
             ]}];
console.log(ul(items1));


var items2 = [{"label" : "Item1"}];

console.log(ol(items2));
