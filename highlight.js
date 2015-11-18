(function(){
	// Set attrib search terms
	var attribs = [];

	libs = {
		"angular": {
			"env": "angular",
			"script": ["ng-show", "ng-repeat", "ng-include"]
		},
		"react": {
			"env": "React",
			"script": ["data-reactid"]
		}
	}

	for (var lib in libs) {
		if (libs[lib].env in window) {
			attribs = libs[lib].script;
		}
	}

	// Append CSS styles
	var cssText = ".dwy-overlay { background-color: rgba(255,0,0,0.1); outline: 2px red solid; outline-offset: -2px; }";
	var css = document.createElement("style");
	css.type = "text/css";
	if ("textContent" in css) {
		css.textContent = cssText;
	}
	else {
		css.innerText = cssText;
	}
	document.body.appendChild(css);

	// Traverse DOM and highlight matching elements
	var nodes = document.body.getElementsByTagName("*");

	for (var i = 0; i < nodes.length; i++) {
		for (var j = 0; j < attribs.length; j++) {
			if (nodes[i].getAttribute(attribs[j]) != null)
				nodes[i].classList.add("dwy-overlay");
		}
	}
})();