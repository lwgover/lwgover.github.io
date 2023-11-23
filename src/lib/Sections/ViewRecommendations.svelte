<script>
	import { navigate } from 'svelte-routing';
	import ViewRecommendations from '$lib/Sections/view_recommendations.svelte';
	const handleClick = () => {
		navigate('./book-recommendations');
	};
</script>

<section class="view-recommendations">
	<div class="view-recommendation-container">
		<div class="submission-container">
			<div class="recommendations-title">Recommended Books</div>
			<div class="submission-mid-title">
				<a class="about-item" on:click={handleClick} href="./book-recommendations/">Recommend me a Book →</a>
			</div>
			<ViewRecommendations height="60vh" />
		</div>
	</div>
</section>

<style>
	.about-item {
		color: #333;
	}
	.submission-mid-title {
		margin: auto;
		text-align: center;
		font-size: 3vh;
		padding-left: 5vw;
		padding-right: 5vw;
		margin: 2vh;
		color: #333;
	}
	.view-recommendation-container {
		background-color: white;
		width: 600px;
		height: 92vh;
		margin: auto;
		margin-top: 4vh;
		margin-bottom: 4vh;
		overflow: hidden;
		box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.1);
		border-radius: 15px;
	}
	.recommendations-title {
		display: relative;
		font-size: 8vh;
		color: #333;
		font-style: italic;
		letter-spacing: 3px;
		margin: 3.5vh;
		text-align: center;
		font-weight: 500;
	}
	@media screen and (max-width: 650px) {
		.view-recommendation-container {
			width: 50vh;
		}
	}
</style>
