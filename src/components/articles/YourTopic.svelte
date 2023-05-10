<script>
  import { articleYourTopics } from "../../constants/article";
</script>

<div class="w-full bg-slate-50 rounded-lg p-4">
  <p class="mb-2">Topics</p>
  <div class="flex flex-col items-start gap-2 mt-2">
    {#each articleYourTopics as topic}
      <button class="text-blue-700 hover:underline">
        {topic}
      </button>
    {/each}
  </div>
</div>
