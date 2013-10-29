describe("Amend", function() {
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

    describe(".clear", function() {
	it("sets the string's value to empty string", function() {
	    expect(Amend.clear("Foo")).toEqual("");
	});
    });

    describe(".delete", function() {
	it("can remove single character", function() {
	    expect(Amend.delete("Foo", "o")).toEqual("F");
	});

	it("can remove multiple characters", function() {
	    expect(Amend.delete("Foobar", "bar")).toEqual("Foo");
	});
    });

    describe(".eachChar", function() {
	it("provides an iterator function", function() {
	    var i = 0;
	    var testString = "Foo";
	    Amend.eachChar(testString, function(c) {
		expect(c).toEqual(testString.charAt(i));
		i++;
	    });
	});
    });

    describe(".reverse", function() {
	it("should reverse string", function() {
	    expect(Amend.reverse("Foo Bar")).toEqual("raB ooF");
	});
    });

    describe("attaching methods to String#prototype", function() {
	Amend.addToPrototype();

	it("capitalises", function() {
	    expect("foo bar is bar".capitalize()).toEqual("Foo bar is bar");
	});

	it("compares ignoring case", function() {
	    expect("FoO bAR".equalIgnoreCase("FOO bar")).toBe(true);
	});

	it("titlizes", function() {
	    expect("foo bar".titlize()).toEqual("Foo Bar");
	});

	it("chop", function() {
	    expect("foo b".chop()).toEqual("foo ");
	});

	it("clear", function() {
	    expect("foo b".clear()).toEqual("");
	});
    });
});
