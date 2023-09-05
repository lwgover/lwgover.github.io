<script>
    export let title = "Lucas Gover";
    export let description = "University of Puget Sound Computer Science and Political Science recent graduate.";
    export let keywords = "web design, data science, data visualization, politics, political science, progressive, books, reading, recent graduate, AI, ML, research, artificial intelligence";
  </script>
  
  <svelte:head>
    <title>{title}</title>
    <meta name="title" property="og:title" content={title} />
    <meta name="description" property="og:description" content={description} />
    <meta name="keywords" content={keywords} />
    <meta name="topic" content={keywords} />
    <meta name="language" content="EN" />
    <meta name="robots" content="index, follow" />
    <meta name="abstract" content={description} />
    <meta name="summary" content={description} />
    <meta name="author" content="Lucas Gover" />
    <meta name="url" content="http://www.lucasgover.com" />
  </svelte:head>