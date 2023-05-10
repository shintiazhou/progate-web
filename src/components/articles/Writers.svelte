<script>
  import { articleWriters } from "../../constants/article";
</script>

<div class="bg-slate-50 p-4 rounded-lg">
  <p class="mb-2">Writer to follow</p>
  {#each articleWriters as writer, index}
    <a
      class="flex items-center mb-3 hover:opacity-60"
      href={"/writer/" + (index + 1)}
    >
      <div class="w-12 h-12 rounded-full overflow-hidden mr-4 mb-1">
        <img
          class="w-full h-full object-cover"
          src={writer.image}
          alt="Profile Picture2"
        />
      </div>
      <div>
        <strong>{writer.name}</strong>
        <p class="text-gray-500 text-xs">{writer.job}</p>
      </div>
    </a>
  {/each}
</div>
