<script>
	import ViewRecommendations from '$lib/Sections/view_recommendations.svelte';
	var isSubmitted = false;
	var output_data = { status: 'waiting', message: 'Submitting ...' };
	function submitForm() {
		// @ts-ignore
		var bookname = document.getElementById('bookname');
		// @ts-ignore
		var bookAuthor = document.getElementById('author');
		// @ts-ignore
		var bookRecommenderName = document.getElementById('recommender-name');
		// @ts-ignore
		var description = document.getElementById('description').value;
		// @ts-ignore
		if (bookname.value === '') {
			// @ts-ignore
			bookname.parentElement.style.color = 'red';
			// @ts-ignore
			bookname.style.borderColor = 'red';
			// @ts-ignore
		} else {
			// @ts-ignore
			bookname.parentElement.style.color = '#555';
			// @ts-ignore
			bookname.style.borderColor = '#777';
		}
		// @ts-ignore
		if (bookAuthor.value === '') {
			// @ts-ignore
			bookAuthor.parentElement.style.color = 'red';
			// @ts-ignore
			bookAuthor.style.borderColor = 'red';
		} else {
			// @ts-ignore
			bookAuthor.parentElement.style.color = '#555';
			// @ts-ignore
			bookAuthor.style.borderColor = '#777';
		}
		// @ts-ignore
		if (!(bookname.value === '') && !(bookAuthor.value === '')) {
			const data = {
				// @ts-ignore
				book_name: bookname.value,
				// @ts-ignore
				author: author.value,
				// @ts-ignore
				recommender_name: bookRecommenderName.value,
				recommendation: description
			};
			isSubmitted = true; // temp
			console.log(JSON.stringify(data));
			fetch('https://shhboimzz4.execute-api.us-east-1.amazonaws.com/BookAPI', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Access-Control-Allow-Origin': '*'
				},
				body: JSON.stringify(data)
			})
				.then((response) => response.json())
				.then((data) => {
					console.log('Success', data);
					isSubmitted = true;
					output_data = data;
				});
		}
	}
</script>

<section class="book-recommendations">
	<div class="book-recommendation-container">
		{#if isSubmitted}
			<div class="submission-container">
				<div class="recommendations-title">Recommend me a Book!</div>

				{#if output_data.status.localeCompare('waiting') == 0}
				<div class="submission-subtitle">{JSON.stringify(output_data.message).slice(1, -1)}</div>
					<div class="lds-dual-ring" />
				{:else if output_data.status.localeCompare('succeeded') == 0}
					<div class='submission-mid-title'>Thanks for your recommendation!</div>
					<div class='submission-subtitle'>Check out some of the other reviews below</div>
					<ViewRecommendations/>
				{:else}
					<div style='margin-top:30%'/>
					<div class='submission-mid-title'>Unfortunately, the submission failed.</div>
					<input class="submit-button" type="submit" value="Try Again?" on:click={function() {isSubmitted = false; output_data = { status: 'waiting', message: 'Submitting ...' };}} />
				{/if}
			</div>
		{:else}
			<div class="recommendations-title">Recommend me a Book!</div>

			<form>
				<label class="text-input-container">
					Book Title
					<input class="text-input" type="text" id="bookname" placeholder="Title" />
				</label>
				<label class="text-input-container">
					Book Author
					<input class="text-input" type="text" id="author" placeholder="Author" />
				</label>
				<label class="text-input-container">
					Your Name (Optional)
					<input class="text-input" type="text" id="recommender-name" placeholder="Your Name" />
				</label>
				<label class="text-input-container">
					Description
					<textarea
						class="text-input description"
						id="description"
						placeholder="What makes it so good?"
					/>
				</label>

				<input class="submit-button" type="submit" value="Submit →" on:click={() => submitForm()} />
			</form>
		{/if}
	</div>
</section>

<style>
	.submission-mid-title {
		margin: auto;
		text-align: center;
		font-size: 3vh;
		padding-left: 5vw;
		padding-right: 5vw;
		margin:2vh;
	}
	.submission-subtitle {
		margin: auto;
		text-align: center;
		font-size: 2.5vh;
		padding-left: 5vw;
		padding-right: 5vw;
	}
	.text-input-container {
		margin-left: 10%;
		margin-right: 10%;
		font-family: var(--font-sans);
		font-size: 1.8vh;
		color: #555;
	}
	.submit-button {
		margin-left: 20%;
		margin-right: 20%;
		text-align: center;
		float: center;
		width: 60%;
		height: 6vh;
		background-image: linear-gradient(to left, #cf5599, #9e79d0, #4c97e3, #00abd3, #43b6b3);
		color: white;
		border: none;
		border-radius: 3vh;
		font-size: 4vh;
		font-family: var(--font-serif);
		font-weight: 550;
		letter-spacing: 6px;
	}
	.submit-button:hover {
		background-image: linear-gradient(to left, #e888bd, #c1a4ed, #8bbfff, #6cd3f6, #83e0dd);
	}
	.text-input {
		outline: none;
		margin: auto;
		margin-top: 0.5vh;
		margin-bottom: 3vh;
		border-top: 0px;
		border-left: 0px;
		border-right: 0px;
		width: 80%;
		margin-right: 10%;
		margin-left: 10%;
		height: 5vh;
		border-radius: 5px;
		overflow: hidden;
		font-size: 2.5vh;
		padding: 1vh;
	}
	.text-input:hover {
		background-color: #eee;
	}
	.description {
		height: 19vh;
		font-family: var(--font-sans);
		border-width: 2.5px;
		overflow:auto
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

	/** From https://loading.io/css/*/
	.lds-dual-ring {
		width: 11vh;
		height: 12vh;
		margin:auto;
		margin-top: 30%;
		translate: -2vh 0;
	}
	.lds-dual-ring:after {
		content: ' ';
		display: block;
		width: 10vh;
		height: 10vh;
		margin: 8px;
		border-radius: 50%;
		border: 1vh solid #767676;
		border-color: #767676 transparent #fff transparent;
		animation: lds-dual-ring 1.2s linear infinite;
	}
	@keyframes lds-dual-ring {
		0% {
			transform: rotate(0deg);
		}
		100% {
			transform: rotate(360deg);
		}
	}
</style>
