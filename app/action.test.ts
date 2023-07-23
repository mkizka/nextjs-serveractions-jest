import { action } from "./action";

jest.spyOn(console, "log");

test("action", () => {
  action();
  expect(console.log).toHaveBeenCalledWith("action called");
});
