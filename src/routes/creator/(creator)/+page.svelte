<script>
  import ArticleItems from "../../../components/articles/ArticleItems.svelte";
</script>

<svelte:head>
  <title>Creator | Progate</title>
  <meta
    name="description"
    content="Discover and explore the Progate Creator program, where you can build and share your own coding projects with the community."
  />
</svelte:head>

<div class="px-10 bg-white">
  <h1>Welcome Back Woman In Tech, <br /> Happy Writing!</h1>

  <div class="max-w-[800px] mt-5">
    <hr />
    <br />
    <strong>Latest Post</strong>
    <ArticleItems allowEdit />
  </div>
</div>
