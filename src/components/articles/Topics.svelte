<script>
  import { articleTopics } from "../../constants/article";
</script>

<div class="w-full bg-slate-50 rounded-lg p-4">
  <p class="mb-2">Topics</p>
  <div class="flex flex-wrap">
    {#each articleTopics as topic}
      <button class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg">
        {topic}
      </button>
    {/each}
  </div>
</div>
