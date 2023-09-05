<script>
	import Seo from '$lib/Seo.svelte';
	import Back from '$lib/back.svelte';
	import Books from '$lib/Sections/Books.svelte';
	import Books_data from '$lib/Sections/Books.json';
	import Footer from '$lib/Sections/Footer.svelte';
	//import Blog from "$lib/Sections/Blog.svelte";
	//import Awards from "$lib/Sections/Awards.svelte";

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
	<div class="background-container">
		<section class="page-404">
			<div class="title">404</div>
			<div class="description-404">
				<div class="description-text-highlight">Couldn't find the page you were looking for</div>
			</div>
			<div class="image-container-404">
				<img src="./images/404.JPG" alt="You Seem to Be Lost" />
			</div>
			<form action="./" class='return-form'>
                <input type="submit" value="Return To Home" class='return-to-home'/>
            </form>
			<Footer />
		</section>
		<!--
    <Projects projects={data.projects} />
    <Awards awards={data.awards} {isMobile} />
    <Blog posts={data.posts} {isMobile} /> 
	-->
	</div>
</main>

<style>
    .return-form {
        position:relative;
        padding-top:100px;
        padding-bottom:100px;
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
		font-style: italic;
		float: center;
		margin: auto;
		margin-left: auto;
		margin-right: auto;
        display: block;
		overflow: hidden;
		text-align: center;
		position: absolute;
		margin: auto;
		text-align: center;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		float: center;
		z-index: 1000;
        width:fit-content;
	}
	.description-text-highlight {
		color: var(--primary-color);
		background-color: rgba(255, 255, 255, 0.9);
		width: fit-content;
		text-align: center;
		float: center;
		margin: auto;
		padding: 5px;
		border-radius: 3px;
		letter-spacing: 2px;
		font-style: italic;
	}
	.description-404 {
		display: block;
		font-weight: 300;
		letter-spacing: -0.05rem;
		overflow: hidden;
		font-size: 3vw;
		text-align: center;
		position: absolute;
		margin: auto;
		text-align: center;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		float: center;
		z-index: 1000;
		padding-top: 42%;
	}
	.page-404 {
		margin-top: auto;
		margin-bottom: auto;
	}
	.background-container {
		background-image: url('/images/backdrops/topography.svg');
		min-height: 100%;
		position: absolute;
		padding-top: 40px;
		padding-bottom: 30px;
	}
	img {
		width: 100%;
	}
	.image-container-404 {
		max-height: 85vh;
		max-width: 80%;
		overflow: hidden;
		margin: auto;
		border-radius: 25px;
		margin-top: 40px;
		box-shadow: 0px 0px 15px 15px rgba(0, 0, 0, 0.1);
	}
	.title {
		color: rgba(255, 255, 255, 0.5);
		display: block;
		font-weight: 600;
		letter-spacing: -0.05rem;
		text-transform: uppercase;
		overflow: hidden;
		font-size: 25vw;
		text-align: center;
		-webkit-text-stroke: 5px white;
		position: absolute;
		margin: auto;
		text-align: center;
		left: 0;
		right: 0;
		margin-left: auto;
		margin-right: auto;
		float: center;
		padding-top: 30px;
	}
	main {
		width: 100%;
		height: 100%;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		justify-content: center;

		/* background-color: var(--primary-color); */
		z-index: 100; /* This is over the nav */
		position: absolute;
		background: linear-gradient(
			to bottom,
			rgba(var(--primary-color-rgb), 1) -150%,
			rgba(var(--pure-background-color-rgb), 1) 250%
		);
	}
    @media screen and (min-width: 1000px) {
		.return-form {
            padding-top: 25px;
            padding-bottom: 50px;
        }
        main {
            height:120%;
        }
	}

	/* On desktop, do the cool sticky footer that reveals on scroll */
	/* @media screen and (min-width: 768px) {
      main {
        position: relative;
      }
    } */
</style>
