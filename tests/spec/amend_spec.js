describe("ImageFitter", function() {
    describe(".capitalize", function() {
	it("capitalises string with single word", function() {
	    expect(Amend.capitalize("foo")).toEqual("Foo");
	});

	it("can handle empty string", function() {
	    expect(Amend.capitalize("")).toEqual("");
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

    describe(".titlize", function() {
	it("will capitalise all words", function() {
	    expect(Amend.titlize("foo bar is bar")).toEqual("Foo Bar Is Bar");
	});

	it("can handle single word", function() {
	    expect(Amend.titlize("foo ")).toEqual("Foo ");
	});

	it("can handle single character", function() {
	    expect(Amend.titlize("f")).toEqual("F");
	});

	it("can handle empty string", function() {
	    expect(Amend.titlize("")).toEqual("");
	});
    });

    describe(".chop", function() {
	it("removes last character from string", function() {
	    expect(Amend.chop("foo")).toEqual("fo");
	});

    	it("handles strings with single character", function() {
	    expect(Amend.chop("f")).toEqual("");
	});

    	it("handles empty string", function() {
	    expect(Amend.chop("")).toEqual("");
	});
    });
});
