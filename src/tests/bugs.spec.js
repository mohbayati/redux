import { apiCallBegin } from "../store/api";
import { addBug, addingBug } from "../store/bugs";

describe("bugsSlice", () => {
  describe("action creators", () => {
    it("addingBug", () => {
      const bug = { describe: "a" };
      const result = addingBug(bug);
      const expected = {
        type: apiCallBegin.type,
        payload: {
          url: "/bugs",
          method: "post",
          data: bug,
          onSuccess: addBug.type,
        },
      };
      expect(result).toEqual(expected);
    });
  });
});
