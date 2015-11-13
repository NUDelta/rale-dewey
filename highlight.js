(function(){
	// Set attrib search terms
	var attribs = [];

	if ("angular" in window) {
		attribs = ["ng-show", "ng-repeat"];
	}
	if ("React" in window) {
		attribs = ["data-reactid"];
	}

	// Append CSS styles
	var cssText = ".rale-overlay { background-color: rgba(255,0,0,0.1); }";
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
	var nodes = document.getElementsByTagName("*");

	for (var i = 0; i < nodes.length; i++) {
		for (var j = 0; j < attribs.length; j++) {
			if (nodes[i].getAttribute(attribs[j]) != null)
				nodes[i].classList.add("rale-overlay");
		}
	}
})();