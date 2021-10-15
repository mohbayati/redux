import { isEven } from "./store/math";

describe("isEven", () => {
  it("should be true when it is given even number", () => {
    const result = isEven(2);
    expect(result).toEqual(true);
  });
  it("should be false when it is given odd number", () => {
    const result = isEven(1);
    expect(result).toEqual(false);
  });
});
