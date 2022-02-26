//* Authentication Configuration for react-firebaseui

//* Import firebase as appFirebaseInstance
import appFirebaseInstance from '@/lib/backend/firebase/appConfiguration';


export const authConfiguration = {
	//* Popup signin flow rather than redirect flow.
	signInFlow: 'popup',
	//* Redirect to /products after sign in is successful.
	signInSuccessUrl: '/',
	// We will display Google and Facebook as auth providers.
	signInOptions: [
		appFirebaseInstance.auth.EmailAuthProvider.PROVIDER_ID,
	],
};