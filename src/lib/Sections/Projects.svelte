<script>
	import { fade, slide } from 'svelte/transition';
	/**
	 * @type {{ items: any; }}
	 */
	export let data;
</script>

<section class="projects">
	<h2 class="section-title">Some Cool Projects</h2>
	<div class="projects-container">
		{#each data.items as datum}
			<div class="row">
				<div class="col col-left" />
				<div class="col col-right">
					<h3 class="project-title">
						{datum.title}
					</h3>
				</div>
			</div>
			<div class="row">
				<div class="col col-left">
					<div class="tools-header">Tools Used</div>
					{#each datum.tools as tool}
						<div class="project-tool">{tool}</div>
					{/each}
				</div>
				<div class="col col-right project-description-container">
					<p class="project-description">{datum.description}</p>
					<a target="_blank" rel="noopener noreferrer" href={datum.link}>
						<button class="check-it-out-button">Check it out ⇛</button>
					</a>
				</div>
			</div>
			{#if 'image' in datum}
				<div
					class="full-image"
					style={`background-image: linear-gradient(to top, rgba(40,40,40,0.3), rgba(255,255,255,0.1)), url(${datum.image});`}
				/>
			{/if}
			<div class="project-spacing" />
		{/each}
	</div>
</section>

<style>
	.full-image {
		position: relative;
		background-size: 100%;
		height: 300px;
		transform: scale(1.25);
		z-index: 1;
		margin-top: 40px;
		border-color: white;
		border-top-width: 2px;
		display: block;
	}
	.full-image::before {
		content: '';
		position: absolute;
		top: 0;
		bottom: 0;
		left: 0;
		right: 0;
	}
	.check-it-out-button {
		background-color: var(--primary-color);
		margin: 10px;
		margin-left: 0px;
		color: white;
		padding: 10px;
		outline: none;
		border-radius: 3px;
		border: 2px solid white;
		font-family: var(--font-mono);
		font-weight: 400;
		font-size: 20px;
		margin-top: 30px;
		z-index: 10;
		margin-bottom: 30px;
	}
	.check-it-out-button:hover {
		background-color: rgb(33, 113, 131);
	}
	.project-tool {
		margin: 5px;
		text-align: center;
		color: white;
		background-color: #d81159;
		font-weight: 800;
		padding: 5px;
		width: fit-content;
		float: right;
		border-radius: 1px;
	}
	.tools-header {
		margin: 10px;
		text-transform: uppercase;
		font-weight: 300;
		font-size: 20px;
		color: #aaa;
		width: fit-content;
		float: right;
		width: 100%;
	}
	.projects .section-title {
		color: #333;
	}
	.projects {
		background: white;
		padding-top: 40px;
		box-shadow: 0px 0px 30px 15px rgba(0, 0, 0, 0.2);
	}
	.project-description-container {
		padding-top: 0pt;
		background-color: white;
		z-index: 0;
	}
	.project-description {
		color: #555;
	}
	.project-title {
		font-family: var(--font-sans);
		font-weight: 1000;
		font-size: 50pt;
		width: 80%;
		z-index: 100;
		padding-bottom: 20px;
		padding-top: 50px;
		color: #101010;
	}
	.project-spacing {
		padding: 30px;
	}
	.projects-container {
		width: 80%;
		margin: auto;
	}
	.projects .row {
		display: flex;
		margin-right: 0px;
	}
	.projects .col-left {
		width: 20%;
		font-family: var(--font-sans);
		float: right;
		text-align: right;
		margin-right: 10px;
	}
	.projects .col-right {
		width: 80%;
	}
	@media screen and (max-width: 768px) {
		.projects-container {
			width: 97%;
		}
		.projects .col-left {
			width: 25%;
		}
		.projects .col-right {
			width: 75%;
		}
		.full-image {
			height: 150px;
		}
		.project-title {
			font-size: 38px;
		}
		.tools-header {
			font-size: 14px;
		}
		.project-tool {
			font-size: 11px;
		}
		.project-description {
			font-size: 18px;
		}
	}
	/**
	@media screen and (min-width: 768px) {
		.projects {
			margin-left: 2%;
			margin-right:2%;
			border-radius: 12px;
		}
	}
	*/
</style>
