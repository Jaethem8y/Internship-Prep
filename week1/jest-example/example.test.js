describe("", () => {
  it("37 to equal 37", () => {
    // value
    expect(37).toBe(37);
  });

  it("{age:39} to equal {age:39}", () => {
    // object
    expect({ age: 39 }).toEqual({ age: 39 });
  });

  it(".toHaveLength", () => {
    // checks the length
    expect("hello").toHaveLength(5);
  });

  it(".toHaveProperty", () => {
    // check for name attribute
    expect({ name: "Mark" }).toHaveProperty("name");
    // check for key and value
    expect({ name: "Mark" }).toHaveProperty("name", "Mark");
  });

  it(".toBeDefined", () => {
    // check if the property is defined
    expect({ name: "Mark" }.name).toBeDefined();
    // since age is not defined it does not pass
    expect({ name: "Mark" }.age).toBeDefined();
  });

  it(".toBeFalsy", () => {
    expect(false).toBefalsy();
    expect(0).toBefalsy();
    expect("").toBefalsy();
    expect(null).toBefalsy();
    expect(undefined).toBefalsy();
    expect(NaN).toBefalsy();
  });

  it(".toBeGreaterThan", () => {
    expect(10).toBeGreaterThan(9);
  });

  it(".toBeGreaterThanOrEqual", () => {
    expect(10).toBeGreaterThanOrEqual(9);
  });

  it(".toBeInstanceOf", () => {
    class Foo{}
    expect(new Foo()).toBeInstanceOf(Foo);
  });


});
