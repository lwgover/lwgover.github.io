<script>
	import { onMount, tick } from 'svelte';
	import { theme } from '../stores/theme.js';
	import Window from '$lib/Window.svelte';

	import '../styles/immutable.css';
	import '../styles/code.css';
	import '../styles/project.css';
	import '../styles/style.css';

	let mounted = false;

	onMount(() => {
		mounted = true;
	});

	// This implements fade-in and out on the page level (smooth transitions)
	//import Loading from "$lib/Loading.svelte";

	// When current page path changes, scroll to top (fixes https://github.com/sveltejs/kit/issues/2794)
	import { page } from '$app/stores';
	$: path = $page.url.pathname;
	$: path, scrollTop();

	async function scrollTop() {
		if (mounted) {
			await tick();
			// @ts-ignore
			document.scrollingElement.scrollTop = 0;
			window.scrollTo(0, 0);
		}
	}
</script>

<Window />
<slot />
