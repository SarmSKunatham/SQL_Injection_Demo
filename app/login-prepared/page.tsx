'use client';
import Link from 'next/link';
import React from 'react';
import { toast } from 'react-toastify';

const LoginPrepared = () => {
	async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		const formData = new FormData(event.currentTarget);

		const loginFormData = {
			username: formData.get('username') as string,
			password: formData.get('password') as string,
		};
		toast.loading('Loading', {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: false,
			progress: undefined,
			theme: 'dark',
		});
		try {
			const response = await fetch('/api/prepared/auth', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(loginFormData),
			});
			toast.dismiss();
			if (response.ok) {
				toast.success('Login Successful!', {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: false,
					progress: undefined,
					theme: 'dark',
				});
			} else {
				toast.error('Login Failed!', {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: false,
					draggable: false,
					progress: undefined,
					theme: 'dark',
				});
			}
			console.log(response);
			console.log(await response.json());
		} catch (error) {
			toast.dismiss();
			toast.error('Login Failed', {
				position: 'top-right',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: false,
				draggable: false,
				progress: undefined,
				theme: 'dark',
			});
			console.error(error);
		}
	}
	return (
		<section className='w-full h-[100vh] flex flex-col items-center justify-center'>
			<div className='w-[80vw] h-[50vh] rounded-xl bg-slate-600/25 shadow-lg border-2 border-slate-300 backdrop-blur-md text-center flex flex-col justify-center items-center space-y-8'>
				<h1 className='text-3xl font-bold'>Login</h1>
				<form onSubmit={handleSubmit} className='w-full px-20'>
					<input
						className='text-black text-lg w-full p-4 mb-4 rounded bg-transparent'
						type='text'
						name='username'
						placeholder='Username'
					/>
					<input
						className='text-black text-lg w-full p-4 rounded bg-none'
						type='password'
						name='password'
						placeholder='Password'
					/>
					<div className='w-full flex justify-center mt-6'>
						<button
							className='text-lg w-48 border-2 border-white h-10 flex items-center justify-center rounded-full hover:bg-white/25 transition-colors duration-200"'
							type='submit'
						>
							Login
						</button>
					</div>
				</form>
				<Link
					href='/'
					className='hover:text-white/25 transition-colors duration-200'
				>
					Back to home
				</Link>
			</div>
		</section>
	);
};

export default LoginPrepared;
