//** Authentication Configuration for react-firebaseui *//

//* Import firebase from appConfiguration.
import firebase from '@/lib/backend/firebase/appConfiguration';


export const firebaseUiConfig = {
	//* Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	//* Redirect to /products after sign in is successful.
	signInSuccessUrl: '/',
	// We will display Google and Facebook as auth providers.
	signInOptions: [
		firebase.auth.EmailAuthProvider.PROVIDER_ID,
	],
};