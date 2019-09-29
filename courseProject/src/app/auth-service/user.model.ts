export class User {
    // tslint:disable-next-line: max-line-length
    // tslint:disable-next-line: variable-name
    constructor(public email: string, public id: string, private _token: string, private _expiresIn: Date) {
    }

    get token() {
        if (!this._expiresIn || new Date() > this._expiresIn) {
            return null;
        }
        return this._token;
    }
}
