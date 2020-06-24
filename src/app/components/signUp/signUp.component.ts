import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signUp',
    templateUrl: './signUp.component.html',
    styleUrls: ['./signUp.component.css']
})
export class SignUpComponent implements OnInit{
    newUser = { 
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: '',
        passwordConfirm: ''
    };

    constructor() {
        
    }

    signUp(): boolean {
        console.log(this.newUser);
        return false;
    }

    ngOnInit(): void {

    }
}