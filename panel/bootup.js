(function() {
	/************************
	 * CONFIG
	 ************************/
	 const PATH_TO_DIR = "https://localhost:4443/panel/";

	 const CSS_FILE = "panel.css";
	 const JS_FILE = "panel.js";

	 const JQUERY_FILE = "https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js";

	 const HTML_TEXT = "<h1>Hello</h1>"

	 const HTML_NODE_CLASS = "dwy-panel";

	/************************
	 * HTML
	 ************************/

	// Append HTML
	function appendDiv(nodeContent, nodeClass) {
		var htmlNode = document.createElement("div");
		htmlNode.className = nodeClass;
		htmlNode.innerHTML = nodeContent;
		document.body.appendChild(htmlNode);
		console.log("appended div " + htmlNode);
	}

	appendDiv(HTML_TEXT, HTML_NODE_CLASS);

	/************************
	 * CSS
	 ************************/

	const CSS_PATH = PATH_TO_DIR + CSS_FILE;

	// Append CSS
	function appendCss(file) {
		var cssNode = document.createElement("link");
		cssNode.rel = "stylesheet";
		cssNode.type = "text/css";
		cssNode.href = file;
		document.head.appendChild(cssNode);
		console.log("appended css file " + cssNode)
	}

	appendCss(CSS_PATH);

	/************************
	 * JS
	 ************************/

	 const JS_PATH = PATH_TO_DIR + JS_FILE;

	 // Append JS
	 function appendJs(file) {
 		var scrNode = document.createElement("script");
 		scrNode.type = "text/javascript";
 		scrNode.src = file;
 		document.head.appendChild(scrNode);
 		console.log("appended js file " + scrNode);
	 }

	 // Async stuff idk
	 function appendJsCheckAndThen(file, name, callback) {
	 	if (name in window) {
	 		callback();
	 	} else {
	 		appendJs(file);

	 		var t = setInterval(function() {
	 			if (name in window) {
	 				clearInterval(t); // stop polling
	 				callback();
	 			}
	 		}, 50);
	 	}
	 }

	 appendJsCheckAndThen(JQUERY_FILE, "jQuery", function() { appendJs(JS_PATH)});
})();