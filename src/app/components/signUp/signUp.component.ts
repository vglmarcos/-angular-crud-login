import { Component } from '@angular/core';
import { NewUser } from '../../models/NewUser';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signUp',
    templateUrl: './signUp.component.html',
    styleUrls: ['./signUp.component.css']
})
export class SignUpComponent {
    public newUser: NewUser;

    constructor( 
        private auth: AuthService,
        private route: Router
    ) {
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
        this.auth.signUp({
            name: this.newUser.name,
            lastname: this.newUser.lastname,
            username: this.newUser.username,
            email: this.newUser.email,
            password: this.newUser.password
        })
        .subscribe(
            res => {
                this.route.navigate(['/signIn']);
            },
            err => {
                console.log(err);
            }
        );
        return false;
    }
}