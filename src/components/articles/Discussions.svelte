<script>
  import { articleDiscussion } from "../../constants/article";
</script>

<div class="bg-slate-50 p-4 rounded-lg">
  <p class="mb-2">Discuss</p>
  {#each articleDiscussion as text}
    <p
      class="mb-1 py-1 border-b border-gray-300 text-cyan-900 hover:text-blue-500 cursor-pointer"
    >
      {text}
    </p>
  {/each}
</div>
