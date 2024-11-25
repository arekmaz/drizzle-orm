import { expect, type TaskContext } from "vitest";
import type { Schema } from "effect";

const replacer = (_: string, value: any) =>
  typeof value === "bigint" ? Number(value) : value;

export function expectSchemaShape<T>(
  _t: TaskContext,
  expected: Schema.Schema<T>,
) {
  return {
    from(actual: Schema.Schema<T>) {
      console.log({ expected: expected.ast, actual: actual.ast });
      expect(JSON.stringify(actual.ast, replacer, 2)).toBe(
        JSON.stringify(expected.ast, replacer, 2),
      );
    },
  };
}
