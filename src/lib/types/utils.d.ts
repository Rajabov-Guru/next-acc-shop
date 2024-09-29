type RequiredKeys<T> = { [K in keyof T]-?:
  (object extends { [P in K]: T[K] } ? never : K)
}[keyof T];

type NonNullableObject<T> = {
  [P in keyof T]: NonNullable<T[P]>;
};

type ExcludeOptionalKeys<T> = Pick<T, RequiredKeys<T>>;

type Modify<T, R> = Omit<T, keyof R> & R;

type Draft<SubmitValues, OverwriteValues = object> =
  Partial<
    Modify<
      ExcludeOptionalKeys<SubmitValues>,
      OverwriteValues
    >
  >;
