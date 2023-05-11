<script>
  import Button from "../Button.svelte";
  import IoIosChatbubbles from "svelte-icons/io/IoIosChatbubbles.svelte";
  export let forum;
</script>

<section class="bg-slate-100 mb-9 p-4 rounded-md">
  <h1 class="text-[#254C60] text-lg md:text-xl">
    {forum.title}
  </h1>
  <p class="text-[#254C60]">
    {forum.description}
  </p>

  <div class="flex flex-col md:flex-row gap-4 justify-between mt-4">
    <div class="flex gap-2 flex-wrap">
      {#each forum.tags as tag}
        <button class="bg-slate-200 px-4 rounded-lg">{tag}</button>
      {/each}
    </div>
    <Button
      color="primary"
      customClass="inline-flex gap-2 items-center bg-gray-300 w-fit"
    >
      <div class="w-6 h-6"><IoIosChatbubbles /></div>
      <span>Add Answer</span>
    </Button>
  </div>
</section>
