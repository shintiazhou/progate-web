<script>
  import GoFile from "svelte-icons/go/GoFile.svelte";
  import GoComment from "svelte-icons/go/GoComment.svelte";
  import FaUserPlus from "svelte-icons/fa/FaUserPlus.svelte";
</script>

<section class="p-4 flex flex-col gap-2">
  <div class="flex gap-2 text-secondary">
    <div class="w-[18px] h-[18px]">
      <GoFile />
    </div>
    <p class="font-semibold">41 Post</p>
  </div>
  <div class="flex gap-2 text-secondary">
    <div class="w-[18px] h-[18px]">
      <GoComment />
    </div>
    <p class="font-semibold">200 Comments</p>
  </div>
  <div class="flex gap-2 text-secondary">
    <div class="w-[18px] h-[18px]">
      <FaUserPlus />
    </div>
    <p class="font-semibold">100 Followers</p>
  </div>
</section>
