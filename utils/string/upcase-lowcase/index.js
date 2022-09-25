import './upper-case.js';
import './lower-case.js';

String.prototype.indentify = function(opType) {
    return opType == "up" ? this.toUpperCase() : this.toLowerCase()
};