<script>
  export let article;
</script>

<div class="flex gap-6 py-6 border-b-2">
  <div class="min-w-[100px] min-h-[100px] rounded-lg overflow-hidden">
    <img class="w-full h-full" src={article.articleCoverPicture} alt="" />
  </div>
  <div class="flex flex-col gap-4">
    <h1>{article.title}</h1>
    <p>{article.content.substring(0, 200)}...</p>
    <div class="flex flex-wrap gap-2">
      {#each article.tags as tag}
        <button class="bg-slate-200 hover:bg-slate-300 py-1 px-4 rounded-lg"
          >{tag}</button
        >
      {/each}
    </div>
  </div>
</div>
