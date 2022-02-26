// Import the functions you need from the SDKs you need
import appFirebaseInstance from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDEBdnsaayI6PwWu6c1M0KoVBtTTZQyEQ8',
	authDomain: 'nexcommerce-b7d0f.firebaseapp.com',
	projectId: 'nexcommerce-b7d0f',
	storageBucket: 'nexcommerce-b7d0f.appspot.com',
	messagingSenderId: '137542996011',
	appId: '1:137542996011:web:63d80d152aa601d7939a6e',
	measurementId: 'G-4F7E5HD889'
};


// Initialize Firebase
export const appInstance = appFirebaseInstance.initializeApp(firebaseConfig);
export const auth = appFirebaseInstance.auth();

//! Exports Firebase package
export default appFirebaseInstance;