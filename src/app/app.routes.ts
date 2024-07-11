import { Routes } from '@angular/router';
import { AuthComponent } from './screens/auth/auth.component';
import { HomeComponent } from './screens/home/home.component';

import {
  AngularFireAuthGuard,
  redirectUnauthorizedTo,
  redirectLoggedInTo,
} from '@angular/fire/compat/auth-guard';

const redirectUnauthorizedToLogin = () =>
  redirectUnauthorizedTo(['authenticate']);
const redirectLoggedInToHome = () => redirectLoggedInTo(['']);

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AngularFireAuthGuard],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
  },
  {
    path: 'authenticate',
    component: AuthComponent,
    data: { authGuardPipe: redirectLoggedInToHome },
  },
];
