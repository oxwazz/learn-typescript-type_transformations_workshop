import { Equal, Expect } from "../helpers/type-utils";

type Fruit = "apple" | "banana" | "orange";

type AppleOrBanana = Fruit extends infer TInfer ?
    TInfer extends "apple" | "banana"
        ? TInfer
        : never
    : never;

type tests = [Expect<Equal<AppleOrBanana, "apple" | "banana">>];
