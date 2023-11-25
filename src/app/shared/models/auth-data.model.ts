export class AuthData {
  constructor(private _token: string | null) { }

  get token() {
    if (new Date() > this.expirationDate) {
      return null;
    }
    return this._token;
  }

  get expirationDate() {
    // TODO: Change to extracting exp field from _token when backend implemented
    return new Date(new Date().getTime() + 5 * 60000) // all tokens are valid for 5 minutes for testing purposes
  }
}