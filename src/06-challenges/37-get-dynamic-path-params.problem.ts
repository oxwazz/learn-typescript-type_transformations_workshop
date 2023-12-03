import { Equal, Expect } from "../helpers/type-utils";
import {S} from 'ts-toolbelt'

type UserPath = "/users/:id";

type UserOrganisationPath = "/users/:id/organisations/:organisationId";

type tes1<T extends string> = S.Split<T, '/'>[number]
type tes2<T extends string> = Extract<tes1<T>, `:${string}`>

type ExtractPathParams<T extends string> = {
  [K in tes2<T> extends `:${infer TInfer}` ? TInfer : never] : string
};

type tests = [
  Expect<Equal<ExtractPathParams<UserPath>, { id: string }>>,
  Expect<
    Equal<
      ExtractPathParams<UserOrganisationPath>,
      { id: string; organisationId: string }
    >
  >
];
