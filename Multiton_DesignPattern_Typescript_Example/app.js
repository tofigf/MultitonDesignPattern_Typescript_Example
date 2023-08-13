"use strict";
class MailService {
    constructor() {
        console.log("MailService object is created.");
    }
    static getInstance(key) {
        if (this.mailServices[key] == null)
            this.mailServices[key] = new MailService();
        const mailService = this.mailServices[key];
        return mailService;
    }
    get mail() {
        return this._mail;
    }
    set mail(value) {
        this._mail = value;
    }
    get userName() {
        return this._userName;
    }
    set userName(value) {
        this._userName = value;
    }
    get password() {
        return this._password;
    }
    set password(value) {
        this._password = value;
    }
}
MailService.mailServices = {};
const gmail = MailService.getInstance("gmail");
const hotmail = MailService.getInstance("hotmail");
const yandex = MailService.getInstance("yandex");
gmail.mail = "...";
gmail.password = "...";
gmail.userName = "...";
const gmail2 = MailService.getInstance("gmail");
const hotmail2 = MailService.getInstance("hotmail");
const yandex2 = MailService.getInstance("yandex");
hotmail.mail = "...";
hotmail.password = "...";
hotmail.userName = "...";
//# sourceMappingURL=app.js.map