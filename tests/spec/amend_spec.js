describe("ImageFitter", function() {
    describe(".capitalize", function() {
	it("capitalises string with single word", function() {
	    expect(Amend.capitalize("foo")).toEqual("Foo");
	});

	it("capitalises string with single character", function() {
	    expect(Amend.capitalize("f")).toEqual("F");
	});

	it("capitalises string with multiple words", function() {
	    expect(Amend.capitalize("foo bar is awesome")).toEqual("Foo bar is awesome");
	});
    });
});
