<div class="Footer row">
	<div class="col">
		<div class="created-by">Created by <a target="_blank" rel="noopener noreferrer" href="https://www.lucasgover.com">Lucas Gover</a> 2023</div>
	</div>
	<div class="col">
        <div class="get-in-touch">Get in Touch:  <a href='mailto:lucasgover@gmail.com'>lucasgover@gmail.com</a></div>
    </div>
</div>

<style>
    .get-in-touch {
        display: relative;
		color: white;
		font-size: 24px;
		letter-spacing: 3px;
        margin-top: 10px;
        margin-bottom: 10px;
    }
	.created-by {
		display: relative;
		color: white;
		font-size: 24px;
		letter-spacing: 3px;
		padding-left: 20px;
        margin:auto;
        margin-top: 10px;
        margin-bottom: 10px;
        
	}
    .col {
        width:50%;
        height:100%;
        text-align: center;
    }
	.Footer {
		padding: 20px;
		background: linear-gradient(
			to left,
			rgba(var(--primary-color-rgb), 1) -225%,
			rgba(var(--pure-background-color-rgb), 1) 100%
		);
	}
    @media screen and (min-width: 601px) {
		.row {
			display: flex;
		}
	}
    @media screen and (max-width: 768px) {
        .get-in-touch {
            font-size: 18pt;
        }
        .created-by {
            font-size: 18pt;
        }
    }
    @media screen and (max-width: 600px) {
        .row {
            display: relative;
        }
        .col {
            display: inline;
            width:100%;
        }
        
    }
</style>
