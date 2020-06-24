import { Component } from '@angular/core';
import { User } from '../../models/User';

@Component({
    selector: 'app-signIn',
    templateUrl: './signIn.component.html',
    styleUrls: ['./signIn.component.css']
})
export class SignInComponent {

    public user: User;

    constructor() {
        this.user = {
            name: '',
            password: ''
        }
    }

    signIn(): boolean {
        console.log(this.user);
        return false;
    }
}