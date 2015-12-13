(function(){

    // Set attrib search terms
    var attribs = [];

    libs = {
        "angular": {
            "env": "angular",
            "script": ["ng-show", "ng-repeat", "ng-click", "ng-include", "ng-scope", "ng-controller"],
        },
        "react": {
            "env": "React",
            "script": ["data-reactid"]
        }
    };

    // Detect library and assign accordingly
    // First, check for global variables
    for ( var lib in libs ) {
        if ( libs[lib].env in window ) {
            attribs = attribs.concat( libs[lib].script );
        }
    };

    // TODO: pattern-matching
    // var re = /ab+c/;
    // var re = new RegExp("ab+c");
    // TODO: memoization for DOM nodes

    // Append CSS styles
    var cssText = ""
        + ".dwy-overlay-sub {"
        + "    background-color: rgba(255,0,0,0.1);"
        + "    outline: 2px red solid;"
        + "    outline-offset: -2px;"
        + "}";
    var css = document.createElement("style");
    css.type = "text/css";
    if ( "textContent" in css ) {
        css.textContent = cssText;
    }
    else {
        css.innerText = cssText;
    };
    document.body.appendChild(css);

    // Traverse DOM and highlight matching elements
    var nodes = document.body.getElementsByTagName("*");

    for ( var i = 0; i < nodes.length; i++ ) {
        for ( var j = 0; j < attribs.length; j++ ) {
            if ( nodes[i].getAttribute(attribs[j]) != null )
                nodes[i].classList.add("dwy-overlay-sub");
        }
    }
})();