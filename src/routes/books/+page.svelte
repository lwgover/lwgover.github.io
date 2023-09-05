<script>
	import Seo from '$lib/Seo.svelte';
	import Back from '$lib/back.svelte'
	import Books from '$lib/Sections/Books.svelte'
	import Books_data from '$lib/Sections/Books.json';
	import Footer from '$lib/Sections/Footer.svelte'
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

<svelte:window bind:innerWidth={pageWidth} bind:innerHeight={pageHeight} bind:scrollY={scroll}/>
<Seo title={"Books | Lucas Gover"} description={"Lucas's reading list"} keywords={"books, currently reading, read, student, computer science, political theory, political science, science fiction"}/>
<Back/>
<main id="home">
	<Books data={Books_data} shorten={false}/>
	<Footer/>
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
		background-image: url('/images/backdrops/topography.svg');
	}

	/* On desktop, do the cool sticky footer that reveals on scroll */
	/* @media screen and (min-width: 768px) {
      main {
        position: relative;
      }
    } */
</style>
