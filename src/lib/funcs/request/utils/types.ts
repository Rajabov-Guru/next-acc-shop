export type RequestFuncParams = {
  path: string;
  apiVersion?: 1 | 2;
  withToken?: boolean;
  method?: 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
  body?: BodyInit;
  searchParams?: Record<string, unknown>;
  signal?: AbortSignal;
};
