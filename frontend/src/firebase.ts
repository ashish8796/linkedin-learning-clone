import firebase from 'firebase';

// interface config {
//     apiKey: string;
//     authDomain: string;
//     projectId: string;
//     storageBucket: string;
//     messagingSenderId: string;
//     appId: string;
//     measurementId: string;
// }

const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    projectId: process.env.REACT_APPPROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

export const storage = firebase.storage();