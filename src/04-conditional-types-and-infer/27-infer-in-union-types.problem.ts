import { Equal, Expect } from "../helpers/type-utils";

const parser1 = {
  parse: () => 1,
};

const parser2 = () => "123";

const parser3 = {
  extract: () => true,
};

type GetParserResult<T> =
    T extends { parse: () => infer TReturn1 }
        ? TReturn1
        : T extends () => infer TReturn2
            ? TReturn2
            : T extends { extract: () => infer TReturn3 }
                ? TReturn3
                : never;

type tesss = GetParserResult<typeof parser1>

type tests = [
  Expect<Equal<GetParserResult<typeof parser1>, number>>,
  Expect<Equal<GetParserResult<typeof parser2>, string>>,
  Expect<Equal<GetParserResult<typeof parser3>, boolean>>,
];
