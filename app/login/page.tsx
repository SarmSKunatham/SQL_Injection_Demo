'use client';
import React from 'react';
import { toast } from 'react-toastify';

const Login = () => {
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
			const response = await fetch('/api/raw/auth', {
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
			<div
				style={{
					backgroundColor: 'rgba(255, 255, 255, 0.49)',
				}}
				className='w-[50vw] h-[50vh] flex flex-col items-center justify-center backdrop-blur-lg rounded'
			>
				<h1 className='text-4xl font-bold text-black py-4'>Login</h1>
				<form onSubmit={handleSubmit}>
					<div>
						<input
							className='text-black'
							type='text'
							name='username'
							placeholder='Username'
						/>
					</div>
					<div>
						<input
							className='text-black'
							type='password'
							name='password'
							placeholder='Password'
						/>
					</div>
					<button type='submit'>Login</button>
				</form>
			</div>
		</section>
	);
};

export default Login;
