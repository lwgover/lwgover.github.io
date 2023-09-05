<script>
	/**
	 * @type {{ items: any; }}
	 */
	export let data;
	export let shorten = false;
</script>

<section class="Books">
	<h2 class="section-title">Books!</h2>
	<div class="book-image-container">
		<img class="book-image" src="./images/Books/reading.jpg" alt="book, while reading" />
	</div>
	{#if shorten}
		<div class="book-item-container" id="even">
			<h3 class="book-item-title">{data.items[0].title}</h3>
			<h4 class="book-item-description">{data.items[0].description}</h4>
			{#each data.items[0].books as book}
				<p class="book-item">{book.title}</p>
			{/each}
			<a class="full-list" href="./books"
				><div>Full Reading List Here</div>
			</a>
		</div>
	{:else}
		{#each data.items as item, i}
			<div
				class="book-item-container"
				id={data.items.length - 1 > i
					? i % 2 == 0
						? 'even'
						: 'odd'
					: i % 2 == 0
					? 'even-end'
					: 'odd-end'}
			>
				<h3 class="book-item-title">{item.title}</h3>
				<h4 class="book-item-description">{item.description}</h4>
				{#each item.books as book}
					<p class="book-item">{book.title}</p>
				{/each}
			</div>
		{/each}
	{/if}
</section>

<style>
	.full-list {
		text-align: center;
		margin: 20px;
		padding: 5px;
		font-family: var(--font-sans);
		font-size: 20px;
		border-color: #666;
	}
	a {
		position: relative;
		color: #000;
		text-decoration: none;
		letter-spacing: 2px;
	}

	a:hover {
		color: #000;
		text-decoration: underline;
	}
	.book-item-description {
		font-family: var(--font-sans);
		color: #666;
		font-size: 15pt;
		margin-bottom: 20px;
		font-weight: 200;
		text-align: center;
	}
	.book-item-title {
		text-align: center;
		font-weight: 1000;
		font-size: 40pt;
		letter-spacing: 7pt;
		padding: 10px;
	}
	.book-item {
		color: #555;
		padding: 5px;
	}
	.Books {
		width: 80%;
		float: center;
		margin: auto;
		margin-top: 50px;
		margin-bottom: 40px;
	}
	.book-image-container {
		position: relative;
		width: 80%;
		margin: auto;
		rotate: -3deg;
		z-index: 0;
		border-radius: 15px;
		margin-top: 0px;
		margin-bottom: 0px;
		transition: rotate 0.5s, scale 1.2s, margin-top 1.2s, margin-bottom 1.2s;
		box-shadow: 0px 0px 10px 10px rgba(0, 0, 0, 0.2);
		padding: 0px;
		overflow: hidden;
		height: fit-content;
		padding-bottom: -5px;
	}
	.book-image-container:hover {
		rotate: -0deg;
		scale: 1.1;
		z-index: 1000;
		margin-top: 60px;
		margin-bottom: 60px;
	}
	.book-image {
		max-width: 100%;
		float: center;
		margin: 0px;
		scale: 1.05;
	}
	#even {
		rotate: 3deg;
	}
	#odd {
		rotate: -3deg;
	}
	#even-end {
		rotate: 1deg;
	}
	#odd-end {
		rotate: -1deg;
	}
	#even,
	#odd,
	#even-end,
	#odd-end {
		position: relative;
		z-index: 0;
		transition: rotate 0.5s, scale 1.2s, margin-top 1.2s, margin-bottom 1.2s;
	}
	#even:hover,
	#odd:hover,
	#even-end:hover,
	#odd-end:hover {
		rotate: -0deg;
		scale: 1.05;
		z-index: 1000;
		margin-top: 40px;
		margin-bottom: 40px;
	}
	.book-item-container {
		background-color: white;
		box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.1);
		margin: 20px;
		padding: 30px;
		border-radius: 10px;
		margin-top: 10px;
		margin-bottom: 10px;
	}
	.book-image-container:hover {
		rotate: -0deg;
		scale: 1.1;
		z-index: 1000;
	}
	@media screen and (max-width: 768px) {
		.Books {
			width: 92%;
		}
		.book-item-title {
			font-size: 32pt;
		}
		.book-item-description {
			font-size: 13.5pt;
		}
		.book-item {
			font-size: 13.5pt;
		}
		.book-item-container {
			margin: 10px;
			margin-top: 0px;
			margin-bottom: 0px;
		}
	}
</style>
