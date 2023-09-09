<script>
	import Seo from '$lib/Seo.svelte';
	import Back from '$lib/back.svelte';
	import Footer from '$lib/Sections/Footer.svelte';

	/**
	 * @type {number}
	 */
	let pageWidth;
	/**
	 * @type {number}
	 */
	let pageHeight;
	$: isMobile = pageWidth < 768;
	let scroll = 0;
	let parallax_rate = -1.001;
</script>

<svelte:window bind:innerWidth={pageWidth} bind:innerHeight={pageHeight} bind:scrollY={scroll} />
<Seo title={'404 | Lucas Gover'} description={'404'} keywords={''} />
<Back />
<main id="home">
	<div class=everything-container>
	<div class="image-container-404">
		<img src="./images/404.JPG" alt="You Seem to Be Lost" />
		<div class='text-container-404'>
		<div class="title">404</div>
		<div class="description-404">
			<div class="description-text-highlight">You seem to be a bit lost</div>
			<!--<div class="description-text-highlight">Couldn't find the page you were looking for</div>-->
		</div>
		</div>
	</div>
	<form action="./" class="return-form">
		<input type="submit" value="Return To Home" class="return-to-home" />
	</form>
	</div>
	<Footer />
</main>

<style>
	.description-text-highlight {
		color: var(--primary-color);
		background-color: rgba(255, 255, 255, 0.9);
		width: fit-content;
		text-align: center;
		border-radius: 3px;
		letter-spacing: 2px;
		font-style: italic;
		margin: auto;
		margin-top: 1vh;
		font-size: 30px;
		padding:3px;
		
	}
	.description-404 {
		position:absolute;
		font-weight: 300;
		letter-spacing: -0.05rem;
		overflow: hidden;
		text-align: center;
		margin: auto;
		z-index: 1000;
		width:100%;
		margin:auto;
		margin-top:50px;
	}
	main {
		width: 100%;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		justify-content: center;

		/* background-color: var(--primary-color); */
		z-index: 100; /* This is over the nav */
		position: relative;
		background-image: url('/images/backdrops/topography.svg');
	}
	img {
		width: 100%;
	}
	.everything-container {
		position: relative;
		overflow: hidden;
		margin: auto;
		border-radius: 20px;
		text-align: center;
	}
	.image-container-404 {
		position: relative;
		max-width: 60%;
		max-height: 70vh;
		overflow: hidden;
		margin: auto;
		border-radius: 20px;
		text-align: center;
	}
	.title {
		margin-top: 0;;
		color: rgba(255, 255, 255, 0.5);
		font-weight: 600;
		letter-spacing: -0.05rem;
		text-transform: uppercase;
		font-size: 20vw;
		text-align: center;
		-webkit-text-stroke: 5px white;
	}
	.text-container-404 {
		position: absolute;
		text-align: center;
		width: 100%;
		top: 50%;
		left: 50%;
		transform: translate(-50%, -50%);
	}
	.return-form {
		position: relative;
		margin: 20px;
	}
	.return-to-home {
        position:relative;
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
		font-style: italic;}
		@media screen and (max-width: 1000px) {
			.image-container-404 {
				max-width: 95%;
			}	
		}
</style>
