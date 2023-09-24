<script>
	function submitForm() {
		// @ts-ignore
		var bookname = document.getElementById('bookname');
		// @ts-ignore
		var author = document.getElementById('author');
		// @ts-ignore
		var description = document.getElementById('description').value;
		// @ts-ignore
		if (bookname.value === '') {
			// @ts-ignore
			bookname.parentElement.style.color = 'red';
            // @ts-ignore
            bookname.style.borderColor = 'red';
			// @ts-ignore
        }else {
			// @ts-ignore
			bookname.parentElement.style.color = '#555';
            // @ts-ignore
            bookname.style.borderColor = '#777';

		}
		// @ts-ignore
		if (author.value === '') {
			// @ts-ignore
			author.parentElement.style.color = 'red';
            // @ts-ignore
            author.style.borderColor = 'red';
		}else {
			// @ts-ignore
			author.parentElement.style.color = '#555';
            // @ts-ignore
            author.style.borderColor = '#777';

		}
        // @ts-ignore
        if (!(bookname.value === '') && !(author.value === '')){
			alert(
				'Your book recommendation "' +
					// @ts-ignore
					bookname.value +
					'" by ' +
					// @ts-ignore
					author.value +
					' has been submitted! Desciption: ' +
					description
			);
		}
	}
</script>

<section class="book-recommendations">
	<div class="book-recommendation-container">
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
				<input class="text-input" type="text" id="author" placeholder="Your Name" />
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
	</div>
</section>

<style>
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
	}
	.book-recommendation-container {
		background-color: white;
		width: 500px;
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
	@media screen and (max-width: 550px) {
		.book-recommendation-container {
			width:60vh;
		}
	}
</style>
