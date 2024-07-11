import { Component, inject } from '@angular/core';
// import { invokeGoogleAuth } from '../../services/firebase/firebase.service';
import { Router } from '@angular/router';
import { Auth, authState, User } from '@angular/fire/auth';
import { Subscription } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';

@Component({
  selector: 'app-auth',
  standalone: true,
  imports: [],
  templateUrl: './auth.component.html',
  styleUrl: './auth.component.scss',
})
export class AuthComponent {
  router: Router;
  private auth: Auth = inject(Auth);
  authState$ = authState(this.auth);
  authStateSubscription: Subscription;

  constructor(private _AuthService: AuthService) {
    this.router = inject(Router);
    this.authStateSubscription = this.authState$.subscribe(
      (aUser: User | null) => {
        //handle auth state changes here. Note, that user will be null if there is no currently logged in user.
        console.log(aUser);
      }
    );
  }
  invokeSignInWithGoogle() {
    this._AuthService.googleLogin();
    // invokeGoogleAuth().then(() => {
    //   this.router.navigate(['/']);
    // });
  }
}
