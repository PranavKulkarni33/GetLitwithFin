import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray  } from '@angular/forms';
import { SocialAuthService } from '@abacritt/angularx-social-login';

export interface Subject {
 id: number;
 name: string;
}
@Component({
 selector: 'app-root',
 templateUrl: 'app.component.html',
 styleUrls: ['app.component.scss']
})
export class AppComponent {
    title = 'GetLitwithFin'
    user:any;
  loggedIn:any;
  constructor(private authService: SocialAuthService) { }

  ngOnInit() {
    this.authService.authState.subscribe((user) => {
      this.user = user;
      this.loggedIn = (user != null);
      console.log(this.user);
      
    });
    
  }
  public signOut(): void {
    this.authService.signOut();
  }
}
