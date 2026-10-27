import { describe, expect, it } from "vitest";

describe("DevOps World", () => {
  it("adds two numbers correctly", () => {
    expect(2 + 3).toBe(5);
  });

  it("uses the expected project name", () => {
    expect("DevOps World").toBe("DevOps World");
  });
});