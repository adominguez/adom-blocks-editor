import { render } from "@testing-library/react";
import AdomBlocksEditor from "../AdomBlocksEditor";

describe("App", () => {
  it("should work as expected", () => {
    render(<AdomBlocksEditor />);
    expect(1 + 1).toBe(2);
  });
});