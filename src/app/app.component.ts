import { Component } from '@angular/core';

import { User } from './auth-form/auth-form.interface';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <auth-form 
        (submitted)="createUser($event)">
        <h3>Create account</h3>
        <button type="submit">
          Join Us
        </button>
      </auth-form>
      <auth-form 
        (submitted)="loginUser($event)">
        <h3>Login</h3>
        <button type="submit">
          Login
        </button>
        <auth-remember 
          (checked)="rememberUser($event)">
        </auth-remember>
      </auth-form>
    </div>
  `
})
export class AppComponent {

  rememberMe: boolean = false;

  rememberUser(remember: boolean) {
    this.rememberMe = remember;
  }

  createUser(user: User) {
    console.log('Create account', user);
  }

  loginUser(user: User) {
    console.log('Login', user);
  }

}
