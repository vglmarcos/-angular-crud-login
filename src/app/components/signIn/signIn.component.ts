import { Component } from '@angular/core';
import { User } from '../../models/User';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signIn',
    templateUrl: './signIn.component.html',
    styleUrls: ['./signIn.component.css']
})
export class SignInComponent {

    public user: User;

    constructor(
        private auth: AuthService,
        private router: Router
    ) {
        this.user = {
            username: '',
            password: ''
        }
    }

    signIn(): boolean {
        this.auth.signIn(this.user)
        .subscribe(
            res => {
                localStorage.setItem('token', res.token);
                this.router.navigate(['/home']);
            },
            err => {
                console.log(err);
            }
        )
        return false;
    }
}