import type {NextPage} from 'next';
import Link from 'next/link';

const Home: NextPage = () => {
	return (
		<h1 className="text-3xl font-bold underline" >
			<Link href={'/auth/signIn'} >
				<a >
					Login
				</a >
			</Link >
		</h1 >
	);
};

export default Home;
