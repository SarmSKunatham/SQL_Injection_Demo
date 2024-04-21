import Link from 'next/link';

export default function Home() {
	return (
		<main className='w-full h-[100vh]  flex items-center justify-center'>
			<div className='w-[80vw] h-[50vh] rounded-md bg-red-500 text-center flex flex-col justify-center items-center'>
				<h1 className='text-3xl font-bold'>SQL Injection Demo</h1>
				<p className='text-xl'>System Security Project</p>
				<Link className='text-lg' href='/login'>
					Login
				</Link>
				<Link className='text-lg' href='/product'>
					Product
				</Link>
			</div>
		</main>
	);
}
