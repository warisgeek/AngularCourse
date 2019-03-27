import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {


    validateLogin(username, password) {

        if (username === 'Admin' && password === 'test') {
            return true;
        } else {
            return false;
        }

    }

}
