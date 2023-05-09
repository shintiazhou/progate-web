<script>
  import IoIosPaper from "svelte-icons/io/IoIosPaper.svelte";
  import Button from "../Button.svelte";
</script>

<aside
  class="flex flex-col gap-4 bg-white fixed inset-y-0 left-0 h-screen overflow-hidden px-4 py-10 shadow w-[230px]"
>
  <a href="/creator"> {"<"} Back </a>

  <input
    class="py-2 px-3 w-full rounded-full outline-none text-sm font-medium bg-gray-200 text-gray-900"
    type="search"
    name="search"
    placeholder="Search"
  />
  <br />
  <ul>
    <strong>Drafts</strong>
    <li class="cursor-pointer my-2 flex gap-2">
      <div class="w-[20px] h-[20px] opacity-30"><IoIosPaper /></div>
      How to build a simple...
    </li>
    <li class="cursor-pointer my-2 flex gap-2">
      <div class="w-[20px] h-[20px] opacity-30"><IoIosPaper /></div>
      How to start a coding..
    </li>
  </ul>
  <ul>
    <strong>Published</strong>
    <li class="cursor-pointer my-2 flex gap-2">
      <div class="w-[20px] h-[20px] opacity-70"><IoIosPaper /></div>
      How to build a simple...
    </li>
    <li class="cursor-pointer my-2 flex gap-2">
      <div class="w-[20px] h-[20px] opacity-70"><IoIosPaper /></div>
      How to start a coding..
    </li>
  </ul>
  <Button customClass="absolute bottom-10 inset-x-0 mx-3" color="secondary"
    >Create new article</Button
  >
</aside>
