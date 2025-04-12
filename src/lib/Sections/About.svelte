<div class="row" id="about">
	<div class="column" style="text-align: center;">
		<div id="pic-and-socials">
			<div class="img-wrapper">
				<img src="./images/me2.jpg" alt="Me!" />
			</div>
			<div class="social-icons">
				<a href="https://github.com/lwgover" target="_blank" rel="noopener noreferrer">
					<img src="./images/socials/github.svg" alt="github-logo" />
				</a>
				<a
					href="https://www.linkedin.com/in/lucas-g-828822223/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="./images/socials/linkedin.svg" alt="linkedin-logo" />
				</a>
				<a href="https://instagram.com/lucas.gover" target="_blank" rel="noopener noreferrer">
					<img src="./images/socials/instagram.svg" alt="instagram-logo" />
				</a>
			</div>
		</div>
	</div>
	<div class="column" id="text-card">
		<div class="text-card-container">
			<h2 class='about-title'>About Me</h2>
			<p id="about-text">
I’m a data analyst and researcher with a strong foundation in polling, data, technology, and the political sphere. I graduated from the University of Puget Sound with a double major in Computer Science and Politics & Government, and I’m passionate about how these fields intersect—especially in the service of progressive change. Throughout college, I built my leadership through community and teaching—representing my university in competitive programming competitions, serving as a Resident Assistant for multiple freshman communities, and working as a TA, tutor, and lead instructor.

During the 2024 election cycle, I worked as a data analyst, partnering with political campaigns, nonprofits, and advocacy groups to analyze polling data, identify shifts in public opinion, and support decision-making through dashboards, visualizations, and analysis. Whether I’m working with code, campaigns, or collaborators, I bring technical fluency, a clear analytical lens, and a deep belief in data as a tool for impact.
			</p>
			<div class='about-links'>
			<a class= 'about-item' href="./books">Check out what I'm reading →</a>
			<!--<a class='about-item' target="_blank" rel="noopener noreferrer" href='./pdfs/resume.pdf'>Check out my Resume →</a>-->
			<a class='about-item' href='./book-recommendations'>Recommend me a Book →</a>
			</div>
		</div>
	</div>
</div>

<style>
	@keyframes picture-hover-in {
		from {
			transform: scale(1.0);
		}
		to {
			transform: scale(1.1)
		}
	}
	@keyframes picture-hover-out {
		from {
			transform: scale(1.1);
		}
		to {
			transform: scale(1.0)
		}
	}
	.about-item{
		width:100%;
		color: #555;
		display: block;
		font-family: var(--font-sans);
		padding-bottom: 8px;
		font-size: 13pt;
	}
	.about-links {
		padding-left:8px;
		display:relative;
	}
	.about-title {
		display: relative;
		font-size: 44pt;
		color: var(--primary-color);
		font-style:italic;
		letter-spacing: 3px;

	}
	#pic-and-socials {
		margin: auto;
		padding-bottom: 20px;
	}
	.row {
		position: relative;
		vertical-align: middle;
	}

	.column {
		flex-basis: 50%;
		box-sizing: border-box;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	#text-card {
		background: white;
		box-shadow: 0px 0px 15px 5px rgba(0, 0, 50, 0.1);
		display: flex;
		padding: 20px;
	}

	#about-text {
		color: #333;
		margin-top: 30px;
		margin-bottom: 30px;
		box-shadow: 0px 0px 0px 0px rgba(0, 0, 50, 0.1);
	}
	.social-icons a {
		display: inline-block;
		background-color: rgba(255, 255, 255, 0.1);
		color: #fff !important;
		border-radius: 100%;
		text-align: center;
		margin-right: 1rem;
		padding: 3px;
	}
	.social-icons img {
		height: 3rem;
		width: 3rem;
	}
	img {
		margin: auto;
		animation: picture-hover-out 0.1s;
	}
	.img-wrapper img {
		width: 50%;
		border-radius: 50%;
		box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0.2);
		margin: 20px;
	}
	img:hover {
		animation: picture-hover-in 0.3s;
		transform: scale(1.1);
		-ms-transform: scale(1.1);
		-moz-transform: scale(1.1);
		-webkit-transform: scale(1.1);
		-o-transform: scale(1.1);
	}
	@media screen and (max-width: 1000px) {
		.row {
			display: relative;
		}
		.img-wrapper img {
			border-radius: 50%;
		}
		#about-text {
			font-size: 1rem;
		}
	}
	@media screen and (min-width: 1001px) {
		.row {
			display: flex;
		}
	}
</style>
