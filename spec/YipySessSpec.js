describe("YipySess",function(){

  beforeAll(function(){
    this.YipySess = new YipySess();
  });

  //should Have keys array of string
  it("should Have keys array",function(){
    expect(this.YipySess.keys).toBeArray();
  });
  //should Have set method
  it("should Have set method",function(){
    expect(this.YipySess).toHaveMethod('set');
	});
  //should Have get method
  it("should Have get method",function(){
    expect(this.YipySess).toHaveMethod('get');
	});
  //should Have check method
  it("should Have check method",function(){
    expect(this.YipySess).toHaveMethod('check');
	});
  //should Have remove method
  it("should Have remove method",function(){
    expect(this.YipySess).toHaveMethod('remove');
	});
  //set specific value returns true
  it("set specific value returns true",function(){
    var res = this.YipySess.set("testString","testVal");
    expect(res).toBeBoolean();
    expect(res).toBeTrue();
	});
  //get specific key returns specific value
  it("get specific key returns specific value",function(){
    var r = this.YipySess.set("testString","testVal");
    var res = this.YipySess.get("testString");
    expect(res).toBeString();
    expect(res).toBe("testVal");
	});

  //get specific non existing key return exeption
  it("get specific non existing key return exeption",function(){
    expect(this.YipySess.get("XtestString")).toThrowAnyError();
	});

  //should have setInitCookie method
  it("should Have setInitCookie method",function(){
    expect(this.YipySess).toHaveMethod('setInitCookie');
	});
  //should have canHaveCookies var
  it("should have canHaveCookies var",function(){
    expect(this.YipySess.canHaveCookies).toBeBoolean();
  });
  //should have checkCanHaveCookies method
  /*it("should Have setInitCookie method",function(){
    expect(this.YipySess).toHaveMethod('checkCanHaveCookies');
	});*/

});
