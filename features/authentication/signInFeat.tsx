//* Import app's authentication configurations from appConfiguration.
import {appAuth} from '@/lib/backend/firebase/appConfiguration';

//* Import SignInFeat UI from react-firebaseui
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';

//* Import firebaseUiConfig for react-firebaseui
import {firebaseUiConfig} from './config/firebaseUiConfig';

export const SignInFeat = (): JSX.Element => {

	return (
		<>
			<StyledFirebaseAuth uiConfig={firebaseUiConfig} firebaseAuth={appAuth} />
		</>
	);
};

