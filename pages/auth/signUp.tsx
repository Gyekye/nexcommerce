import {SignUpFeat} from '@/features/authentication/signUpFeat';
import {NextPage} from 'next';

const SignUp: NextPage = (): JSX.Element => {
	return (
		<div className={`w-screen h-screen flex justify-center items-center bg-gray-200`} >
			<SignUpFeat />
		</div >
	);
};
//! Exports SignIn Page.
export default SignUp;