<script>
  import { page } from "$app/stores";
  import Footer from "../../../components/Footer.svelte";
  import SearchHeader from "../../../components/SearchHeader.svelte";
  import { articles } from "../../../constants/article";
  const pageId = parseInt($page.params.id || "0") - 1;
</script>

<svelte:head>
  <title>{articles[pageId].title}</title>
  <meta name="description" content={articles[pageId].description} />
</svelte:head>

<SearchHeader />
<section
  class="flex flex-col gap-6 mx-auto p-4 max-w-[1000px] min-h-screen mt-14"
>
  <p>
    <a href="/articles" class="underline">Articles</a> / {articles[pageId]
      .title}
  </p>
  <h1>{articles[pageId].title}</h1>
  <div class="author flex gap-4 items-center">
    <div class="rounded-full w-[50px] h-[50px] overflow-hidden bg-gray-400">
      <img
        class="w-full h-full"
        src={articles[pageId].articleCoverPicture}
        alt={articles[pageId].title}
      />
    </div>
    <div class="flex gap-4">
      <p class="after:w-[1px] after:h-[1px] after:border font-bold text-xs">
        {articles[pageId].author}
      </p>
      <p class="text-xs">{articles[pageId].releaseDate}</p>
      <p class="text-xs">{articles[pageId].durationToRead} Read</p>
    </div>
  </div>
  <p class="text-justify text-lg">
    {articles[pageId].body}
  </p>

  <section class="categories flex flex-wrap gap-2 justify-center mt-6">
    {#each articles[pageId].tags as tag}
      <button class="bg-slate-200 hover:bg-slate-300 py-1 px-4 rounded-lg"
        >{tag}</button
      >
    {/each}
  </section>
</section>
<Footer />
