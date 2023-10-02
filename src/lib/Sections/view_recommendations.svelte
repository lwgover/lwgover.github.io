<script>
	// @ts-nocheck

	import { onMount } from 'svelte';
	import { fade } from 'svelte/transition';
    export let height = '55vh'
	// @ts-nocheck
	let reviews = [
		{ loading: 'true' },
		{ loading: 'true' },
		{ loading: 'true' },
		{ loading: 'true' },
		{ loading: 'true' },
		{ loading: 'true' },
		{ loading: 'true' },
		{ loading: 'true' },
		{ loading: 'true' },
		{ loading: 'true' },
		{ loading: 'true' },
		{ loading: 'true' }
	];
	function load_reviews() {
		fetch('https://shhboimzz4.execute-api.us-east-1.amazonaws.com/BookAPI', {
			method: 'GET',
			headers: {
				'Content-Type': 'application/json',
				'Access-Control-Allow-Origin': '*'
			}
		})
			.then((response) => response.json())
			.then((data) => {
				console.log('Success', data);

				let loaded_reviews = JSON.parse(data['message']);
				console.log(loaded_reviews);
				for (var i = 0; i < 12; i++) {
					reviews[i] = loaded_reviews[i];
				}
			});
	}
	onMount(() => load_reviews());
</script>

<div class="view-recommendations-container" style={`height: ${height}`}>
	{#each reviews as review, i}
		<div class="review-card-container">
			{#if review['loading']}
				<div
					class="review-card-loading-title review-card-loading"
					transition:fade={{ delay: 100 + 300 * i, duration: 300 }}
				>
					<div class="loading-shine" />
				</div>
			{:else}
				<div class="review-card-title" transition:fade={{ delay: 650 + 300 * i, duration: 300 }}>
					{review['book_name']}
				</div>
			{/if}
			{#if review['loading']}
				<div
					class="review-card-loading-author review-card-loading"
					transition:fade={{ delay: 200 + 300 * i, duration: 300 }}
				>
					<div class="loading-shine" />
				</div>
			{:else}
				<div class="review-card-author" transition:fade={{ delay: 650 + 300 * i, duration: 300 }}>
					{review['author']}
				</div>
			{/if}
			{#if review['loading']}
				<div
					class="review-card-loading-desc review-card-loading"
					transition:fade={{ delay: 300 + 300 * i, duration: 300 }}
				>
					<div class="loading-shine" />
				</div>
			{:else}
				<div class="review-card-desc" transition:fade={{ delay: 650 + 300 * i, duration: 300 }}>
					{review['recommendation']}
				</div>
			{/if}
		</div>
	{/each}
</div>

<style>
	.review-card-desc {
		width: 100%;
		border-radius: 5px;
		margin-top: 15px;
        color: #333;
	}
	.review-card-title {
		width: 50%;
		font-size: 3vh;
		border-radius: 5px;
        font-weight: 550;
        color: #222;
        letter-spacing: 2px;
	}
	.review-card-author {
		width: 40%;
		font-size: 2vh;
		border-radius: 5px;
		margin-top: 5px;
        color: #666;
        font-style: italic;
	}
	.review-card-loading-desc {
		width: 100%;
		height: 5vh;
		border-radius: 5px;
		margin-top: 15px;
	}
	.review-card-loading-title {
		width: 50%;
		height: 3vh;
		border-radius: 5px;
	}
	.review-card-loading-author {
		width: 40%;
		height: 2vh;
		border-radius: 5px;
		margin-top: 5px;
	}
	.review-card-loading {
		background-color: #ddd;
		overflow: hidden;
	}
	.loading-shine {
		position: relative;
		top: 0;
		height: 100%;
		width: 6vh;
		background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.7), transparent);
		animation: shine 2.5s infinite linear;
		transform: translate(-100px, 0px);
	}
	@keyframes shine {
		0% {
			transform: translate(-150px, 0px);
		}
		100% {
			transform: translate(500px, 0px);
		}
	}
	.review-card-container {
		width: 100%;
		background-color: white;
		margin-bottom: 20px;
		border-radius: 1.3vh;
		padding: 20px;
		box-shadow: #bcbcbc 0 0 10px 5px;
		overflow: hidden;
	}
	.view-recommendations-container {
		height: 55vh;
		overflow-x: hidden;
		background-color: #ddd;
		margin: 20px;
		border-radius: 2vh;
		padding: 13px;
		overflow-y: auto;
	}
</style>
