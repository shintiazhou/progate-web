<script>
  import Header from "../../components/author/Header.svelte";
  import Counter from "../../components/author/Counter.svelte";
  import Topics from "../../components/author/Topics.svelte";
  import SinglePost from "../../components/author/SinglePost.svelte";
  import { articles } from "../../data/article";
</script>

<Header />
<section class="flex p-4 max-w-[1200px] mx-auto my-6">
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
