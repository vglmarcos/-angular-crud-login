import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signIn',
    templateUrl: './signIn.component.html',
    styleUrls: ['./signIn.component.css']
})
export class SignInComponent implements OnInit {
    newUser = { 
        name: '',
        password: ''
    };
    
    constructor() {

    }

    signIn(): boolean {
        console.log(this.newUser);
        return false;
    }

    ngOnInit(): void {

    }
}