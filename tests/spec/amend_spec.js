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

    describe(".equalIgnoreCase", function() {
	it("can compare single characters", function() {
	    expect(Amend.equalIgnoreCase("f", "F")).toBe(true);
	});

	it("can compare single words", function() {
	    expect(Amend.equalIgnoreCase("foo", "FoO")).toBe(true);
	});

	it("can compare string with multiple words", function() {
	    expect(Amend.equalIgnoreCase("foo bAr iS Bar", "FOO BaR IS BAr")).toBe(true);
	});

	it("can compare string with symbols words", function() {
	    expect(Amend.equalIgnoreCase("foo bAr iS %#@ B-a*r", "FOO BaR IS %#@ B-A*r")).toBe(true);
	});
    });
});
