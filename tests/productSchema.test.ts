import { describe, expect, it } from "vitest";
import { productSchema } from "@/schemas/productSchema";

describe("productSchema validation", () => {
  it("should accept a valid product", () => {
    const valid = {
      product: "Widget",
      category: "Hardware",
      value: "100",
    };
    const result = productSchema.safeParse(valid);
    expect(result.success).toBe(true);
  });

  it("should reject a product with missing product field", () => {
    const invalid = {
      product: "",
      category: "Hardware",
      value: "100",
    };
    const result = productSchema.safeParse(invalid);
    expect(result.success).toBe(false);
  });

  it("should coerce numeric string value to number", () => {
    const input = {
      product: "Gadget",
      category: "Periféricos",
      value: "42",
    };
    const result = productSchema.safeParse(input);
    expect(result.success).toBe(true);
    expect(result.data?.value).toBe(42);
  });
});