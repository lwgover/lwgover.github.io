<script>
	import Seo from '$lib/Seo.svelte';
	import Header from '$lib/Sections/Header.svelte';
    import About from '$lib/Sections/About.svelte';
	import Writings from "$lib/Sections/Writings.svelte";
	//import Blog from "$lib/Sections/Blog.svelte";
	//import Awards from "$lib/Sections/Awards.svelte";

	/**
	 * @type {number}
	 */
	let pageWidth;
	$: isMobile = pageWidth < 768;
</script>

<svelte:window bind:innerWidth={pageWidth} />
<Seo />
<main id="home">
	<Header />
	<hr/>
    <About/>
	<hr/>
	<Writings/>
	<!--
    <Projects projects={data.projects} />
    <Awards awards={data.awards} {isMobile} />
    <Blog posts={data.posts} {isMobile} /> 
	-->
</main>

<style>
	main {
		width: 100%;
		margin: 0 auto;

		display: flex;
		flex-direction: column;
		justify-content: center;

		/* background-color: var(--primary-color); */
		z-index: 100; /* This is over the nav */
		position: relative;
		background-image: url( '/images/backdrops/topography.svg' );
	}

	/* On desktop, do the cool sticky footer that reveals on scroll */
	/* @media screen and (min-width: 768px) {
      main {
        position: relative;
      }
    } */
</style>
