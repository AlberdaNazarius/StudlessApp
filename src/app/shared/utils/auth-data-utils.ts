export class AuthDataHelper {
  public static isValid(token: string) {
    return new Date() < AuthDataHelper.getExpirationDate(token); 
  }

  public static getExpirationDate(token: string) {
    // TODO: Change to extracting exp field from _token when backend implemented
    return new Date(new Date().getTime() + 5 * 60000) // all tokens are valid for 5 minutes for testing purposes
  }
}
