<script>
  import Discussion from "../../components/articles/Discussions.svelte";
  import Topics from "../../components/articles/Topics.svelte";
  import ArticleItems from "../../components/articles/ArticleItems.svelte";
  import Categories from "../../components/articles/Categories.svelte";
  import Levels from "../../components/articles/Levels.svelte";
  import Writers from "../../components/articles/Writers.svelte";
  import SearchHeader from "../../components/SearchHeader.svelte";
  import Footer from "../../components/Footer.svelte";
</script>

<svelte:head>
  <title>Creator | Progate</title>
  <meta
    name="description"
    content="Discover and explore the Progate Creator program, where you can build and share your own coding projects with the community."
  />
</svelte:head>

<SearchHeader />
<div class="bg-white flex px-4 gap-10">
  <div class="flex-col w-2/10 hidden lg:flex max-w-[300px] px-6 gap-6 mt-10">
    <Levels />
    <Topics />
  </div>

  <!-- Content -->
  <div class="w-full mt-4">
    <Categories />
    <ArticleItems />
  </div>

  <div class="flex-col w-2/10 hidden lg:flex max-w-[400px] px-6 gap-6 mt-10">
    <Topics />
    <Writers />
    <Discussion />
  </div>
</div>
<Footer />
