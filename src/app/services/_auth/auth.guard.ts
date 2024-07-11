// import { Injectable } from '@angular/core';
// import { CanActivate, Router } from '@angular/router';
// import { Observable } from 'rxjs';
// import { FireAuth } from '../firebase/firebase.service';
// import { onAuthStateChanged } from 'firebase/auth';

// @Injectable({
//   providedIn: 'root',
// })
// export class AuthGuard implements CanActivate {
//   constructor(private router: Router) {}

//   /**
//    * Checks if the user is authenticated and can activate the route.
//    * @returns An Observable<boolean> that emits true if the user is authenticated,
//    * and false if not. If the user is not authenticated, it navigates to the '/authenticate' route.
//    */
//   canActivate(): Observable<boolean> {
//     return onAuthStateChanged(FireAuth, (user) => {
//       if (!user) {
//         this.router.navigate(['/authenticate']);
//         return false;
//       }
//       return true;
//     }) as any;
//   }
// }
