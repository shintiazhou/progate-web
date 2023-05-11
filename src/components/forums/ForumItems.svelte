<script>
  import IoIosChatbubbles from "svelte-icons/io/IoIosChatbubbles.svelte";
  import { forumItems } from "../../constants/forum";
</script>

{#each forumItems as forum, id}
  <a href={"/forum/" + (id + 1)}>
    <div class="py-6 bg-slate-100 rounded-lg p-4 mx-auto my-5 max-w-screen-lg">
      <div class="text-[#254C60] font-medium text-lg mb-4">
        {forum.title}
      </div>
      <div class="font-medium text-xm mb-6">
        {forum.description}
      </div>
      <div class="flex flex-col sm:flex-row">
        <div class="flex-grow">
          {#each forum.tags as tag}
            <button
              class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
            >
              {tag}
            </button>
          {/each}
        </div>

        <button
          class="bg-[#E3EEFF] px-7 m-1 rounded-lg relative sm:inline-block py-2 w-fit"
        >
          <div class="absolute top-1/2 left-2 transform -translate-y-1/2">
            <div class="w-4 h-4"><IoIosChatbubbles /></div>
          </div>
          Add answer
        </button>
      </div>
    </div></a
  >
{/each}
