//* Import useSignInWithEmailAndPassword from react-firebase-hooks
import firebase from '@/lib/backend/firebase/appConfiguration';

//* Import SignInFeat UI from react-firebaseui
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//* Import authConfiguration for react-firebaseui
import {authConfiguration} from './authConfiguration';

export const SignInFeat = (): JSX.Element => {
	// const [
	// 	signInWithEmailAndPassword,
	// 	user,
	// 	loading,
	// 	error,
	// ] = useSignInWithEmailAndPassword(firebase.auth);

	return (
		<>
			<StyledFirebaseAuth uiConfig={authConfiguration} firebaseAuth={firebase.auth()} />
		</>
	);
};

