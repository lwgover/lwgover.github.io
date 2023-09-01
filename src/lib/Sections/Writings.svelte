<script>
	export let data;
</script>

<section class="writings">
	<div class="row">
		<div class="col">
			<h2>Writings</h2>
			<img src="src/lib/Sections/Writings/Writings/birds.png"/>
		</div>

		<div class="col">
			<h2>Column 2</h2>
			<p>Hello World!</p>
			<p>Hello World!</p>
			<p>Hello World!</p>
			<p>Hello World!</p>
		</div>
	</div>
</section>

<style>
    .writings{
        text-align: center;
    }
	.row {
		display: table; /* Make the container element behave like a table */
		width: 100%; /* Set full-width to expand the whole page */
	}

	.col {
		display: table-cell; /* Make elements inside the container behave like table cells */
        padding:20px;
	}
</style>
