/*! grunt-grunticon Stylesheet Loader - v2.1.6 | https://github.com/filamentgroup/grunticon | (c) 2015 Scott Jehl, Filament Group, Inc. | MIT license. */

!function(){function e(e,n,t){"use strict";var o=window.document.createElement("link"),r=n||window.document.getElementsByTagName("script")[0],i=window.document.styleSheets;return o.rel="stylesheet",o.href=e,o.media="only x",r.parentNode.insertBefore(o,r),o.onloadcssdefined=function(e){for(var n,t=0;t<i.length;t++)i[t].href&&i[t].href===o.href&&(n=!0);n?e():setTimeout(function(){o.onloadcssdefined(e)})},o.onloadcssdefined(function(){o.media=t||"all"}),o}function n(e,n){e.onload=function(){e.onload=null,n&&n.call(e)},"isApplicationInstalled"in navigator&&"onloadcssdefined"in e&&e.onloadcssdefined(n)}!function(t){var o=function(r,i){"use strict";if(r&&3===r.length){var a=t.navigator,c=t.document,s=t.Image,u=!(!c.createElementNS||!c.createElementNS("http://www.w3.org/2000/svg","svg").createSVGRect||!c.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image","1.1")||t.opera&&a.userAgent.indexOf("Chrome")===-1||a.userAgent.indexOf("Series40")!==-1),l=new s;l.onerror=function(){o.method="png",o.href=r[2],e(r[2])},l.onload=function(){var t=1===l.width&&1===l.height,a=r[t&&u?0:t?1:2];o.method=t&&u?"svg":t?"datapng":"png",o.href=a,n(e(a),i)},l.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",c.documentElement.className+=" grunticon"}};o.loadCSS=e,o.onloadCSS=n,t.grunticon=o}(this),function(e,n){"use strict";var t,o=n.document,r=function(e){if(o.attachEvent?"complete"===o.readyState:"loading"!==o.readyState)e();else{var n=!1;o.addEventListener("readystatechange",function(){n||(n=!0,e())},!1)}},i=function(e){return n.document.querySelector('link[href$="'+e+'"]')},a=function(e,n){if(t&&!n)return t;t={};var o,r,i,a,c,s;if(!(o=e.sheet))return t;r=o.cssRules?o.cssRules:o.rules;for(var u=0;u<r.length;u++)i=r[u].cssText,a="grunticon:"+r[u].selectorText,(c=i.split(");")[0].match(/US\-ASCII\,([^"']+)/))&&c[1]&&(s=decodeURIComponent(c[1]),t[a]=s);return t},c=function(e,n){var t,r,i,a,c;n?t=e:(n=e,t=o),a="data-grunticon-embed";for(var s in n){c=s.slice("grunticon:".length);try{r=t.querySelectorAll(c)}catch(e){continue}i=[];for(var u=0;u<r.length;u++)null!==r[u].getAttribute(a)&&i.push(r[u]);if(i.length)for(u=0;u<i.length;u++)i[u].innerHTML=n[s],i[u].style.backgroundImage="none",i[u].removeAttribute(a)}return i},s=function(n,t){"svg"===e.method&&r(function(){var o=a(i(e.href));"function"==typeof t?(c(n,o),t()):c(o),"function"==typeof n&&n()})};e.embedIcons=c,e.getCSS=i,e.getIcons=a,e.ready=r,e.svgLoadedCallback=s,e.embedSVG=s}(grunticon,this)}();