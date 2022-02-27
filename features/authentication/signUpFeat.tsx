import {appAuth} from '@/lib/backend/firebase/appConfiguration';
import Link from 'next/link';
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

	if (loading) {
		return <p >Loading...</p >;
	}

	return (
		<div className={`w-[26rem] h-[20rem] flex flex-col justify-center items-center 
		px-10 bg-transparent select-none`}
		>
			<p className={`text-4xl font-bold mb-1`} >Nexcommerce</p >
			<p className={`text-sm text-black text-opacity-80 mb-1`} >Register for an account.</p >

			{
				error && (
					<div className={`text-xs p-4 bg-red-50 my-4 text-red-700 py-4`} >
						<p >Error: {error.message}</p >
					</div >
				)
			}

			<input
				className={`w-full py-3.5 px-4 my-4 transition-all duration-150 delay-150 ease-linear
				 focus:shadow-lg focus:outline-gray-400`}
				type="email"
				placeholder={`Email`}
				value={email}
				onChange={(e) => setEmail(e.target.value)}
			/>
			<input
				className={`w-full py-3.5 px-4 mb-4 transition-all duration-150 delay-150 ease-linear
				 focus:shadow-lg focus:outline-gray-400`}
				type="password"
				placeholder={`Password`}
				value={password}
				onChange={(e) => setPassword(e.target.value)}
			/>
			<button
				className={`w-full py-3.5 my-2 bg-black text-white font-medium transition-all duration-150 delay-150 ease-linear
				focus:shadow-lg hover:bg-opacity-70`}
				onClick={() => createUserWithEmailAndPassword(email, password)} >
				Sign Up
			</button >
			<p className={`text-sm py-2`} >Already have an account?
				<span className={`font-bold mx-1`} >
				<Link href={`/auth/signIn`} >
					<a >
						Log In
					</a >
				</Link >
			</span >
			</p >
		</div >
	);
};