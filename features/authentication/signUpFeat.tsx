import {appAuth} from '@/lib/backend/firebase/appConfiguration';
import {useState} from 'react';
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth';

export const SignUpFeat = (): JSX.Element => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [
		createUserWithEmailAndPassword,
		user,
		loading,
		error,
		// @ts-ignore
	] = useCreateUserWithEmailAndPassword(appAuth);

	if (error) {
		return (
			<div className={`bg-red-50 text-red-700 py-4`} >
				<p >Error: {error.message}</p >
			</div >
		);
	}
	if (loading) {
		return <p >Loading...</p >;
	}
	if (user) {
		console.log(user);
		return (
			<div className={`bg-green-50 py-4`} >
				<p >Registered User: {user.user.email}</p >
			</div >
		);
	}
	return (
		<div className={`bg-green-50 py-4`} >
			<input
				type="email"
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				type="password"
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button onClick={() => createUserWithEmailAndPassword(email, password)} >
				Register
			</button >
		</div >
	);
};