<script>
	import { fade, slide} from 'svelte/transition';
	/**
	 * @type {{ items: any; }}
	 */
	export let data;
	let curr_datum = data.items[data.items.length - 1];

	function next() {
		var last = data.items.pop();
		data.items.unshift(last);
		console.log(last);
		data = data;
		curr_datum = data.items[data.items.length - 1];
		return null;
	}
</script>

<section class="writings">
	<h2 class="section-title">Things I've Written</h2>
	<div class="row">
		<div class="col col-left">
			<div class="image-container">
				{#each data.items as datum, i}
					{#key datum}
					<a href={datum.link} target="_blank" rel="noopener noreferrer" out:fade in:fade>
						<img
							src={`${datum.photo}`}
							alt="birds paper"
							style={`transform: rotate(${(i - 1) * 7}deg);`}
							class="image center"
						/>
					</a>
					{/key}
				{/each}
			</div>
		</div>

		<div class="col col-right">
			{#key curr_datum}
				<div class="writing-desc-header" in:fade={{duration: 1000, delay: 500 }} out:slide={{duration: 800}}>
					<h2 class="writing-title">
						<a target="_blank" rel="noopener noreferrer" href={curr_datum.link}
							>{curr_datum.title}</a
						>
					</h2>
					<h3 class="writing-desc">{curr_datum.authors}</h3>
					<h3 class="writing-desc">{curr_datum.purpose}</h3>
				</div>
				<p class="writing-abstract" style="text-align:left" in:fade={{duration: 1000,delay: 700 }} out:slide={{duration: 800}}>
					{curr_datum.abstract}
				</p>
			{/key}
			<button class="next-button" on:click={next}>Next</button>
		</div>
	</div>
</section>

<style>
	.writing-title a {
		color: white;
	}
	.writing-title a:hover {
		color: var(--accent-color);
	}
	.writing-desc-header {
		background-color: rgba(255, 255, 255, 0.2);
		padding: 10px;
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	.writing-desc {
		color: white;
		font-size: 20px;
		padding-left: 20px;
	}
	.writing-title {
		text-align: left;
		font-size: 40px;
		font-family: var(--font-serif);
		font-weight: 200;
		padding: 10px;
	}
	.next-button {
		background-color: rgba(255, 255, 255, 0.2);
		margin: 10px;
		color: white;
		padding: 5px;
		outline: none;
		border-radius: 3px;
		padding-left: 20px;
		padding-right: 20px;
		border: 2px solid white;
		font-family: var(--font-serif);
		font-weight: 400;
		font-size: 30px;
		font-style: italic;
	}
	.next-button:hover {
		background-color: rgba(255, 255, 255, 0.4);
	}
	.writing-abstract {
		font-size: 18px;
		padding-left: 30px;
		padding: 20px;
	}
	.center {
		display: block;
		margin-left: auto;
		margin-right: auto;
		width: 50%;
	}
	.image-container {
		position: relative;
		height: 350px;
		margin: 0;
		text-align: center;
		top: 6.25%;
	}

	.image {
		position: absolute;
		height: 270px;
		width: auto;
		box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
		margin: auto;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		top: 0;
		bottom: 0;
		margin-top: auto;
		margin-bottom: auto;
	}
	img {
		position: absolute;
		top: 0;
		left: 0;
		transform: translateX(-50%);
		opacity: 0.5;
	}

	img:nth-child(2) {
		opacity: 0.9;
	}

	img:last-child {
		opacity: 1;
	}
	u {
		text-decoration-thickness: 0.05em;
		text-underline-offset: 7px;
	}
	@media screen and (min-width: 1001px) {
		.writings .row {
			display: flex;
			margin-right: 0px;
		}
		.writings .col-left {
			width: 33%;
		}
		.writings .col-right {
			width: 67%;
		}
		.next-button {
			float: right;
			margin-right: 50px;
		}
	}
	@media screen and (max-width: 1000px) {
		.row {
			display: relative;
		}
		.writings .col-left {
			width: 100%;
		}
		.writings .col-right {
			width: 100%;
		}
		.next-button {
			margin: 0 auto;
			display: block;
		}
		.writing-desc-header {
			margin: 20px;
			border-top-right-radius: 5px;
			border-bottom-right-radius: 5px;
		}
		.writing-abstract {
			padding: 40px;
			padding-top: 10px;
		}
	}
</style>
