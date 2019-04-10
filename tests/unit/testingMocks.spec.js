import testingMocks from "../../src/testingMocks";
import axios from "axios";

jest.mock("axios", () => ({
  get: jest.fn()
}));

describe("testingMocks", () => {
  it("calls axios", () => {
    testingMocks();
    console.log("jej");
    expect(axios.get).toBeCalledWith("www.google.com");
  });
});
