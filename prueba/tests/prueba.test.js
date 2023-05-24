const { toTime } = require("../main");
describe("TITULO DEL TEST", () => {
  it("descrip test 1", () => {
    expect(toTime(3600)).toBe("1 hour(s) and 0 minutes(s)");
  });
  it("descrip test 2", () => {
    expect(toTime(3500)).toBe("0 hour(s) and 58 minutes(s)");
  });
  it("descrip test 3", () => {
    expect(toTime(323500)).toBe("89 hour(s) and 51 minutes(s)");
  });
});
