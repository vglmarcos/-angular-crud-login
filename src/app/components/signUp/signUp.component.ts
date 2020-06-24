import { Component } from '@angular/core';
import { NewUser } from '../../models/NewUser';

@Component({
    selector: 'app-signUp',
    templateUrl: './signUp.component.html',
    styleUrls: ['./signUp.component.css']
})
export class SignUpComponent {
    public newUser: NewUser;

    constructor() {
        this.newUser = {
            name: '',
            lastname: '',
            username: '',
            email: '',
            password: '',
            passwordConfirm: ''
        }
    }

    signUp(): boolean {
        console.log(this.newUser);
        return false;
    }
}