<div class="row" id="about">
	<div class="column" style="text-align: center;">
		<div id="pic-and-socials">
			<div class="img-wrapper">
				<img src="./images/me2.jpg" alt="Me!" />
			</div>
			<div class="social-icons">
				<a
					href="https://www.linkedin.com/in/lucas-gover-828822223/"
					target="_blank"
					rel="noopener noreferrer"
				>
					<img src="./images/socials/linkedin.svg" alt="linkedin-logo" />
				</a>
				<a href="https://github.com/lwgover" target="_blank" rel="noopener noreferrer">
					<img src="./images/socials/github.svg" alt="github-logo" />
				</a>
				<a href="https://instagram.com/lucas.gover" target="_blank" rel="noopener noreferrer">
					<img src="./images/socials/instagram.svg" alt="instagram-logo" />
				</a>
			</div>
		</div>
	</div>
	<div class="column" id="text-card">
		<p id="about-text">
			I am a recent graduate from the University of Puget Sound, with a double major in Computer
			Science and Politics & Government. I am very passionate about both majors and particularly
			their intersection. As I worked with teams throughout college, I demonstrated my leadership
			abilities by representing my university in competitive programming competitions and by
			teaching as a TA, Tutor, and Lead Instructor. On top of that, I have explored my interests
			further by publishing research papers in both fields – Politics and Artificial Intelligence.
			These experiences have contributed to a deepened curiosity and deepened my passion for both
			disciplines. I am excited to bring this same energy to professional work environments and help
			others do the same.
		</p>
	</div>
</div>

<style>
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
		color: black;
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
	}
	.img-wrapper img {
		width: 50%;
		border-radius: 50%;
		box-shadow: 0px 0px 0px 10px rgba(255, 255, 255, 0.2);
    margin:20px;
	}
	img:hover {
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
	}
  @media screen and (min-width: 1001px) {
		.row {
			display: flex;
		}
	} 
</style>
