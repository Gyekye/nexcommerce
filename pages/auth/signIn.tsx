import {SignInFeat} from '@/features/authentication/signInFeat';
import {NextPage} from 'next';

const SignIn: NextPage = (): JSX.Element => {
	return (
		<div className={'w-screen h-screen flex flex-col justify-center'} >
			<div >
				<SignInFeat />
			</div >
		</div >
	);
};
//! Exports SignIn Page.
export default SignIn;