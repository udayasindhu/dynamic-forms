import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class LoginService {
    constructor(private http: HttpClient){}
    private users = [
        {
            un: "admin",
            pd: "admin"
        }
    ];
    private authError: string = "";

    login(user) {
        let flag = false;
        let validatedUser = this.users.filter(data => data.un === user.uname && data.pd === user.pass)[0];
        if (validatedUser) {
            flag = true;
            this.loginSuccess();
        }
        return flag;
    }

    loginSuccess() {
        let loggedinTime = Date.now();
        this.http.get('assets/config.json').subscribe((data:any) => {
            const configData = data;
            let expiryTime = loggedinTime + (configData.expiryTime * 60000);
            sessionStorage.setItem('loggedinTime', loggedinTime.toString());
            sessionStorage.setItem('expiryTime', expiryTime.toString());
            sessionStorage.setItem('isLoggedIn', 'true');
        })
    }

    getAuthError(){
        return this.authError;
    }

    setAuthError(error){
       this.authError = error;
    }

}