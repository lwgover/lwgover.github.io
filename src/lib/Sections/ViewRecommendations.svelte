<script>
	import ViewRecommendations from '$lib/Sections/view_recommendations.svelte';
</script>

<section class="book-recommendations">
	<div class="book-recommendation-container">
		<div class="submission-container">
			<div class="recommendations-title">Recommended Books</div>
			<div class="submission-mid-title"><a class='submission-mid-title' href='./book-recommendations'>Recommend one →</a></div>
			<ViewRecommendations height='60vh'/>
		</div>
	</div>
</section>

<style>
	.submission-mid-title {
		margin: auto;
		text-align: center;
		font-size: 3vh;
		padding-left: 5vw;
		padding-right: 5vw;
		margin: 2vh;
        color:#333;
	}
	.submission-subtitle {
		margin: auto;
		text-align: center;
		font-size: 2.5vh;
		padding-left: 5vw;
		padding-right: 5vw;
    }
	.book-recommendation-container {
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
		.book-recommendation-container {
			width: 50vh;
		}
	}
</style>
