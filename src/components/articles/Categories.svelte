<script>
  export let selectedCategory = 0;
  export const categories = ["Recommendation", "Latest", "Trending"];
</script>

<div class="py-5 border-b border-gray-300">
  {#each categories as category, index}
    <button
      on:click={() => (selectedCategory = index)}
      class={`hover:bg-slate-300 py-1.5 px-4 m-1 rounded-full ${
        selectedCategory === index ? " bg-blue-200 " : " bg-slate-200 "
      }`}
    >
      {category}
    </button>
  {/each}
</div>
