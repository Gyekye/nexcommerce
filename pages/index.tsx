import {ProductCard} from '@/features/product/productCard';
import type {NextPage} from 'next';

const Home: NextPage = () => {
	return (
		<>
			<header className={`bg-red-50`} >
				<h1 >Next.js + TypeScript + Tailwind CSS</h1 >
			</header >
			<p >List of products</p >
			<ProductCard />
		</>
	);
};

export default Home;
