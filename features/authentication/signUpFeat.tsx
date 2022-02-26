import {auth} from '@/lib/backend/firebase/appConfiguration';
import 'firebase/auth';
import 'firebase/firestore';

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
	] = useCreateUserWithEmailAndPassword(auth);

	if (error) {
		return (
			<div >
				<p >Error: {error.message}</p >
			</div >
		);
	}
	if (loading) {
		return <p >Loading...</p >;
	}
	if (user) {
		return (
			<div >
				<p >Registered User: {user.email}</p >
			</div >
		);
	}
	return (
		<div className="App" >
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