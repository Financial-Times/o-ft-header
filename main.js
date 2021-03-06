/*global require,module*/
'use strict';

var oHeader = require('./src/js/Header');
var	constructAll = function() {
	oHeader.init();
	document.removeEventListener('o.DOMContentLoaded', constructAll);
};

document.addEventListener('o.DOMContentLoaded', constructAll);

module.exports = oHeader;
