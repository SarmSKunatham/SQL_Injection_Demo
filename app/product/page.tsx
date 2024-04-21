'use client';

import React from 'react';

const Product = () => {
	const [searchInput, setSearchInput] = React.useState('');
	const [searchResults, setSearchResults] = React.useState([]);
	const [loading, setLoading] = React.useState(false);

	async function searchProducts() {
		setLoading(true);
		try {
			const response = await fetch(`/api/products?search=${searchInput}`);
			const data = await response.json();
			setSearchResults(data);
		} catch (error) {
			console.error(error);
		}
		setLoading(false);
	}

	function handleSearchChange(event: React.ChangeEvent<HTMLInputElement>) {
		setSearchInput(event.target.value);
	}

	return (
		<section>
			<div>
				<h1>Product</h1>
				<input
					className='text-black'
					type='search'
					placeholder='Search for products'
					onChange={handleSearchChange}
				/>
				<button onClick={searchProducts}>Search</button>
			</div>
			<h3>Search Result</h3>
			<ul>
				<li>
					<h2>Product 1</h2>
					<p>Description 1</p>
				</li>
				<li>
					<h2>Product 1</h2>
					<p>Description 1</p>
				</li>
			</ul>
		</section>
	);
};

export default Product;
