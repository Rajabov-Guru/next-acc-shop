export class RequestError extends Error {
  public resp: string | ErrorModel | undefined;

  constructor(message: string, resp?: string | ErrorModel) {
    super(message);

    this.resp = resp;
  }
}
