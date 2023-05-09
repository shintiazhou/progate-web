<script>
  import { onMount } from "svelte";
  import icon from "../lib/Icon.png";
  let isLoggedIn = false;

  onMount(() => {
    isLoggedIn = localStorage.getItem("logged-in");
  });
</script>

<header
  class="z-30 fixed shadow inset-x-0 top-0 flex items-center justify-between flex-wrap bg-primary py-3 px-5 md:px-10"
>
  <div class="flex gap-4">
    <a href="/">
      <img class="rounded-full cursor-pointer" src={icon} alt="progate" /></a
    >

    <div
      class="flex rounded-full outline-none text-sm font-medium bg-white text-gray-900 w-auto md:w-72 justify-between items-center"
    >
      <input
        class="py-2 px-3 w-full rounded-full outline-none text-sm font-medium bg-white text-gray-900"
        type="search"
        name="search"
        placeholder="Search"
      />
    </div>
  </div>
  {#if isLoggedIn}
    <a
      href="/creator"
      class="cursor-pointer flex items-center gap-2 hover:bg-gray-700 hover:text-white text-black font-medium p-2 md:px-4 md:border border-black hover:border-transparent rounded-full"
    >
      <img
        class="rounded-full cursor-pointer"
        src="https://picsum.photos/id/23/30/30"
        alt="woman in tech"
      />
      <p class="hidden md:block">Woman in tech</p>
    </a>
  {:else}
    <a
      href="/login"
      class="cursor-pointer flex items-center gap-2 hover:bg-gray-700 hover:text-white text-black font-medium p-2 px-4 border border-black hover:border-transparent rounded-full"
    >
      Login
    </a>
  {/if}
</header>
