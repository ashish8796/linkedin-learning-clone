import firebase from 'firebase';

interface config {
    apiKey: string;
    authDomain: string;
    projectId: string;
    storageBucket: string;
    messagingSenderId: string;
    appId: string;
    measurementId: string;
}

const firebaseConfig : config = {
    apiKey: "AIzaSyAPuz4gk-HqKLGy7LTFHMcdCQqqVxuMkBE",
    authDomain: "linked-learning-project.firebaseapp.com",
    projectId: "linked-learning-project",
    storageBucket: "linked-learning-project.appspot.com",
    messagingSenderId: "563611800853",
    appId: "1:563611800853:web:01f3f2e2e84a881bbac51c",
    measurementId: "G-E15SKQQM43"
};

export const storage = firebase.storage();