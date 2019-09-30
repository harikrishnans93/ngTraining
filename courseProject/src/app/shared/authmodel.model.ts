export class AuthModel {
    constructor(public email: string, public password: string, private returnSecureToken: boolean) { }
}
