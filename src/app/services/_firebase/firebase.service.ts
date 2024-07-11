// import { FirebaseApp, initializeApp } from 'firebase/app';
// import { environment } from '../../environments/environment';
// import {
//   Auth,
//   GoogleAuthProvider,
//   UserCredential,
//   getAuth,
//   signInWithPopup,
//   signOut,
//   onAuthStateChanged,
//   User,
// } from 'firebase/auth';

// /**
//  * Initializes a Firebase app, sets up authentication, signs out the user, and invokes Google authentication.
//  * @returns A promise that resolves with the user credentials if successful, or rejects with an error.
//  */
// export const FireApp: FirebaseApp = initializeApp(environment.firebaseConfig);
// /**
//  * Initializes and returns an instance of Firebase Authentication using the provided Firebase app instance.
//  * @param {FirebaseApp} FireApp - The Firebase app instance to use for authentication.
//  * @returns {Auth} An instance of Firebase Authentication.
//  */
// export const FireAuth: Auth = getAuth(FireApp);
// /**
//  * Signs out the current user from Firebase authentication.
//  * @param {FireAuth} FireAuth - The Firebase authentication instance.
//  * @returns None
//  */
// export const FireAuthSignOut = signOut(FireAuth);
// /**
//  * Initiates Google authentication by creating a new GoogleAuthProvider instance
//  * and signing in with a popup window.
//  * @returns A Promise that resolves with the user credentials upon successful authentication,
//  * or rejects with an error if authentication fails.
//  */
// export const invokeGoogleAuth = () => {
//   const provider = new GoogleAuthProvider();
//   return signInWithPopup(FireAuth, provider)
//     .then((credentials: UserCredential) => {
//       console.log({ credentials });
//       return credentials;
//     })
//     .catch((error) => {
//       console.error({ error });
//       return error;
//     });
// };

// export const AuthStateObserver = () =>
//   new Promise<User | null>((resolve, reject) => {
//     onAuthStateChanged(FireAuth, (user) => {
//       console.log({ user });
//       if (user === null) {
//         reject(new Error('User is not authenticated'));
//         return;
//       }
//       resolve(user);
//     });
//   });
