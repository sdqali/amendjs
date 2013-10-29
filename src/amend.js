Amend = {
    capitalize: function(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
    },
    equalIgnoreCase: function(thisString, thatString) {
	return thisString.toUpperCase() === thatString.toUpperCase();
    },
    titlize: function(str) {
	return str
	    .split(" ")
	    .map(function(word) {
		return Amend.capitalize(word);
	    })
	    .join(" ");
    },
    chop: function(str) {
	return str.substr(0, str.length - 1);
    },
    clear: function(str) {
	return "";
    },
    delete: function(str, pattern) {
	return str.replace(new RegExp(pattern.concat(".*")), "");
    },
    eachChar: function(str, f) {
	str.split("").forEach(f);
    },
    reverse: function(str) {
	return str.split("").reverse().join("");
    },
    addToPrototype: function() {
	String.prototype.capitalize = function() {
	    return Amend.capitalize(this);
	};

	String.prototype.equalIgnoreCase = function(otherString) {
	    return Amend.equalIgnoreCase(this, otherString);
	};

	String.prototype.titlize = function() {
	    return Amend.titlize(this);
	};

	String.prototype.chop = function() {
	    return Amend.chop(this);
	};

	String.prototype.clear = function() {
	    return Amend.clear(this);
	};
    }
}
