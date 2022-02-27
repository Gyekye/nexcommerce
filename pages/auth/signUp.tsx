import {SignUpFeat} from '@/features/authentication/signUpFeat';
import {NextPage} from 'next';

const SignUp: NextPage = (): JSX.Element => {
	return (
		<div >
			<SignUpFeat />
		</div >
	);
};
//! Exports SignIn Page.
export default SignUp;