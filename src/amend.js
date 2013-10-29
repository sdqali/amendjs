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
    }
}
