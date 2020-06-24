import { Component, OnInit } from '@angular/core';
import { ProfileService } from '../../services/profile.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
    public profile = {
        _id: '',
        name: '',
        lastname: '',
        username: '',
        email: '',
        password: ''
    };

    constructor(
        private profileService: ProfileService
    ) { }

    ngOnInit(): void {
        this.profileService.getProfile()
        .subscribe(
            res => {
                this.profile = res.user;
                console.log(this.profile);
            },
            err => {
                console.log(err);
            }
        )
    }

    deleteUser(): boolean {
        this.profileService.deleteUser(this.profile._id)
        .subscribe(
            res => {
                console.log(res);
            },
            err => {
                console.log(err);
            }
        );
        return false;
    }
}