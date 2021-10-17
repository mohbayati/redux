import Axios from "axios";
import MockAdapter from "axios-mock-adapter";
import { apiCallBegin } from "../store/api";
import { addBug, addingBug, loadBugs, resolivingBug } from "../store/bugs";
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
  let mock;
  let store;
  beforeEach(() => {
    mock = new MockAdapter(Axios);
    store = configureStore();
  });
  const bugSlice = () => {
    return store.getState().entites.bugs;
  };
  it("should add the bug to store of it's saved to the server", async () => {
    // Arrange
    const bug = { describe: "a" };
    const saveBug = { ...bug, id: 1 };
    mock.onPost("/bugs").reply(200, saveBug);
    // Act
    await store.dispatch(addingBug(bug));
    // Assert
    expect(bugSlice().list).toHaveLength(1);
  });
  it("should not add the bug to store of it's saved to the server", async () => {
    // Arrange
    const bug = { describe: "a" };
    mock.onPost("/bugs").reply(500);
    // Act
    await store.dispatch(addingBug(bug));
    // Assert
    expect(bugSlice().list).toHaveLength(0);
  });
  it("should resolving a bag", async () => {
    mock.onPatch("/bugs/1").reply(200, { id: 1, resolved: true });
    mock.onPost("/bugs").reply(200, { id: 1 });

    // Act
    await store.dispatch(addingBug({ id: 1 }));
    await store.dispatch(resolivingBug(1));
    console.log(bugSlice());

    expect(bugSlice()[0].resolved).toBe(true);
  });

  it("testing catch in fetching in bugs", async () => {
    mock.onGet("/bugs").reply(200, { id: 1 });

    await store.dispatch(loadBugs());
    await store.dispatch(loadBugs());

    expect(mock.history.get.length).toBe(1);
  });
});
