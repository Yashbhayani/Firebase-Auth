// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";

export const environment = {
  firebaseConfig : {
    apiKey: "AIzaSyDCMq6c_O5lnkMkzJ8K6pNIIRSXnjwmORg",
    authDomain: "crude-40b6f.firebaseapp.com",
    projectId: "crude-40b6f",
    storageBucket: "crude-40b6f.appspot.com",
    messagingSenderId: "750599617527",
    appId: "1:750599617527:web:08d9f2e2380b21ae8eccf2"
  },
  production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
