<script>
  import { page } from "$app/stores";
  import Topics from "../../../components/articles/Topics.svelte";
  import Header from "../../../components/Header.svelte";
  import Counter from "../../../components/author/Counter.svelte";
  import SinglePost from "../../../components/author/SinglePost.svelte";
  import { articles } from "../../../data/article";
  import { articleWriters } from "../../../constants/article";
  const pageId = parseInt($page.params.id || "0") - 1;
</script>

<svelte:head>
  <title>{articleWriters[pageId].name}</title>
  <meta
    name="description"
    content="Progate is an online learning platform that offers various courses on programming, web development, and more."
  />
</svelte:head>
<Header />
<div class="mt-4">
  <section
    class="bg-secondary flex flex-col items-center gap-2 p-4 py-10 text-light"
  >
    <div class="w-[75px] h-[75px] bg-white rounded-full overflow-hidden">
      <img
        class="w-full h-full"
        src={articleWriters[pageId].image}
        alt={articleWriters[pageId].name}
      />
    </div>
    <h1>{articleWriters[pageId].name}</h1>
    <p>{articleWriters[pageId].job}</p>
  </section>

  <section class="flex p-4 max-w-[1200px] mx-auto my-6 gap-10">
    <aside class="lg:w-1/3">
      <Counter />
      <Topics />
    </aside>
    <main class="lg:w-2/3">
      <h2 class="text-secondary">Post</h2>

      {#each articles as article}
        <SinglePost {article} />
      {/each}
    </main>
  </section>
</div>
