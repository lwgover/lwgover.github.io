<script>
	/**
	 * @type {{ items: any; }}
	 */
	export let data;
	console.log(data);
</script>

<section class="writings">
	<h2 class="section-title">Thing I've Written</h2>
	<div class="row">
		<div class="col col-left">
			<div class="image-container">
				{#each data.items as datum, i}
					<img
						src={`${datum.photo}`}
						alt="birds paper"
						style={`transform: rotate(${(i - 1) * 7}deg);`}
						class="image"
					/>
				{/each}
			</div>
		</div>

		<div class="col col-right">
			<h2>{data.items[data.items.length - 1].title}</h2>
			<h3>{data.items[data.items.length - 1].authors}</h3>
			<h3>{data.items[data.items.length - 1].purpose}</h3>
			<p style="text-align:left">{data.items[data.items.length - 1].abstract}</p>
		</div>
	</div>
</section>

<style>
	.image-container {
		position: relative;
		width: 50%;
		height: 350px;
		margin: auto;
		text-align: center;
	}

	.image {
		position: absolute;
		height: 270px;
		width: auto;
		box-shadow: 0px 0px 15px 5px rgba(0, 0, 0, 0.1);
		margin: auto;
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
	.section-title {
		font-weight: 10px;
		padding: 20px;
		text-align: left;
	}
	.writings {
		text-align: center;
	}
	.row {
		display: flex;
	}
	.col-left {
		width: 33%;
	}
	.col-right {
		width: 66%;
	}
	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		.section-title {
			-webkit-text-stroke: 2px rgba(255, 255, 255, 0.8);
			-webkit-text-fill-color: rgba(255, 255, 255, 0.1);
		}
	}
	@media screen and (max-width: 1001px) {
	}
</style>
