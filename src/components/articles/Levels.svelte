<script>
  import { articleLevels } from "../../constants/article";

  let selectedLevel = 0;
</script>

<div class="w-full flex flex-col items-start bg-slate-50 p-4 rounded-lg">
  <p class="mb-2">Level</p>
  {#each articleLevels as level, index}
    <button
      on:click={() => (selectedLevel = index)}
      class={`hover:bg-indigo-300 py-1 px-4 mb-2 rounded-full ${
        selectedLevel === index
          ? " bg-[#ABA8DD] text-white"
          : " bg-slate-200 text-dark"
      }`}
    >
      {level}
    </button>
  {/each}
</div>
