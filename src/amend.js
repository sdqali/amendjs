Amend = {
    capitalize: function(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
    },
    equalIgnoreCase: function(thisString, thatString) {
	return thisString.toUpperCase() === thatString.toUpperCase();
    }
}
