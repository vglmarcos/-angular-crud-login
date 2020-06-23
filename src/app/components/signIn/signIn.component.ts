import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-signIn',
    templateUrl: './signIn.component.html',
    styleUrls: ['./signIn.component.css']
})
export class SignInComponent implements OnInit {
    user = { 
        name: '',
        password: ''
    };
    
    constructor() {

    }

    signIn(): boolean {
        console.log(this.user);
        return false;
    }

    ngOnInit(): void {

    }
}