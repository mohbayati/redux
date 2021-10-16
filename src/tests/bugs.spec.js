import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { apiCallBegin } from "../store/api";
import { addBug, addingBug } from "../store/bugs";
import configureStore from "../store/configureStore";

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

describe("Social or behaiveral test", () => {
  it("should handle the addBug action", async () => {
    const bug = { describe: "a" };
    const saveBug = { ...bug, id: 1 };

    var mock = new MockAdapter(Axios);
    mock.onPost("/bugs").reply(200, saveBug);
    const store = configureStore();

    await store.dispatch(addingBug(bug));
    expect(store.getState().entites.bugs.list).toHaveLength(1);
  });
});
