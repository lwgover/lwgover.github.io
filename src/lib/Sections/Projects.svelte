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
					<a href={datum.link}>
						<button class='check-it-out-button'>Check it out ⇛</button>
					</a>
				</div>
			</div>
			<div class="project-spacing" />
		{/each}
	</div>
</section>

<style>
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
    }
    .project-tool {
        margin:5px;
        text-align: center;
        color:white;
        background-color: #d81159;
        font-weight: 800;
        padding:5px;
        width: fit-content;
        float:right;
        border-radius: 1px;
    }
    .tools-header {
        margin:10px;
        text-transform: uppercase;
        font-weight: 300;
        font-size: 20px;
        color: #aaa;
        width: fit-content;
        float:right
    }
	.projects .section-title {
		color: #333;
	}
	.projects {
		background: white;
		margin-top: 50px;
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
		padding: 20px;
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
        float:right;
        text-align: right;
        margin-right: 10px;
	}
	.projects .col-right {
		width: 80%;
	}
    @media screen and (max-width: 1000px) {
        .projects-container {
		width: 100%;
        }
        .projects .col-right {
		width: 95%;
	}
    }
</style>
