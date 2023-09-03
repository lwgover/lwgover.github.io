<script>
	import { onMount } from 'svelte';
	import { gsap } from 'gsap';
	import { windowHeight, windowWidth } from '../../stores/global.js';
	import { prefersReducedMotion } from '../../stores/motion.js';
	/**
	 * @type {any}
	 */
	let lucas;
	/**
	 * @type {any}
	 */
	let gover;
	/**
	 * @type {any}
	 */
	let subtitle;
	/**
	 * @type {any}
	 */
	let overline;
	/**
	 * @type {any}
	 */
	let headerObj;
	let transitioned = false;

	import { sleep } from '../../scripts/utils.js';
	import { transition } from '../../scripts/transitions/intro.js';
	// @ts-ignore
	import Window from '$lib/Window.svelte';

	onMount(async () => {
		if ($prefersReducedMotion) return;

		await sleep(250);
		await transition(lucas, gover, subtitle, overline);

		await sleep(2000);
		transitioned = true;
	});
</script>

<section
	id="header"
	style="min-height: {$windowHeight ? `${$windowHeight * 1.01}px` : '101vh'}; perspective: 100vw;"
>
	<div class="header-container">
		<h1 class="overline begin-invisible" class:transitioned>Hi, I'm</h1>
		<div class="title">
			<h1 class="lucas begin-invisible gradient-accented" class:transitioned>lucas</h1>
			<h1 class="gover begin-invisible gradient-accented" class:transitioned>gover</h1>
		</div>
	</div>
</section>

<style>
	section {
		width: 100%;
		margin: auto;
		display: flex;
		flex-direction: column;
		justify-content: center; /* center */
		place-items: center; /* center */
		overflow: hidden;
		position: relative;
		transition: height 100ms ease; /* Height is initially 101vh UNTIL windowHeight is set */
	}
	.header-container {
		line-height: 0.85;
		user-select: none;
	}

	.overline {
		font-weight: 200;
		text-align: left;
		margin-bottom: 0.75rem;
		font-style: italic;
		font-size: 2.75rem;
	}

	.title {
		margin-bottom: 1.5rem;
		/* overflow: hidden; */
	}

	.lucas,
	.gover {
		display: block;
		font-weight: 600;
		letter-spacing: -0.05rem;
		text-transform: uppercase;
		overflow: hidden;
	}

	@media screen and (-webkit-min-device-pixel-ratio: 0) {
		.gover {
			-webkit-text-stroke: 3px rgba(255, 255, 255, 0.7);
			-webkit-text-fill-color: rgba(255, 255, 255, 0.1);
		}
	}

	:global(.lucas *) {
		transform-origin: center bottom;
		/* transform-origin: center top; */
		transform-style: preserve-3d;
		transition: opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),
			transform 0s cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	:global(.gover *) {
		transform-origin: center bottom;
		/* transform-origin: center top; */
		transform-style: preserve-3d;
		transition: opacity 0s cubic-bezier(0.215, 0.61, 0.355, 1),
			transform 0s cubic-bezier(0.215, 0.61, 0.355, 1);
	}

	.lucas {
		font-size: 15vw;
	}

	.gover {
		font-size: 15vw;
	}

	@media screen and (max-width: 768px) {
		.overline {
			font-size: 2rem;
			margin-bottom: 0.75rem;
		}
	}

	@media screen and (max-width: 768px) {
		section {
			place-items: center;
		}

		.overline {
			font-size: 8vw;
		}
	}
	@media screen and (max-width: 768px){
		.gover {
			-webkit-text-stroke: 1px rgba(255, 255, 255, 1);
		}
		.lucas,
		.gover{
			font-size: 20vw;
		}
	}
</style>
