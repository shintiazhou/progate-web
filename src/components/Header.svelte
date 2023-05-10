<script>
  import { onMount } from "svelte";
  import logo from "../lib/Logo.png";
  import Sidebar from "./Sidebar.svelte";
  let isLoggedIn = false;

  onMount(() => {
    isLoggedIn = localStorage.getItem("logged-in");
  });

  const routes = [
    {
      href: "/articles",
      title: "Articles",
    },
    {
      href: "/forum",
      title: "Forum",
    },
    {
      href: "/pricing",
      title: "Pricing",
    },
  ];

  let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<Sidebar {toggleMenu} {isOpen} />
<header
  class="z-10 fixed shadow inset-x-0 top-0 flex items-center justify-between flex-wrap bg-primary py-3 px-5 md:px-10"
>
  <a href="/" class="hidden lg:block">
    <img src={logo} alt="logo" class="w-[100px] h-[30px] object-contain" />
  </a>

  <div class="lg:hidden flex flex-col items-center justify-center">
    <button class="text-dark" on:click={toggleMenu}>
      <svg
        class="w-6 h-6"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>
  </div>
  <div class="hidden lg:flex justify-center w-full md:w-auto">
    {#each routes as route}
      <a
        href={route.href}
        class="text-black hover:text-blue-600 px-4 md:px-7 py-2 rounded-md text-sm font-medium"
        >{route.title}</a
      >
    {/each}
  </div>
  {#if isLoggedIn}
    <a
      href="/creator"
      class="cursor-pointer flex items-center gap-2 hover:bg-gray-700 hover:text-white text-black font-medium p-2 px-4 border border-black hover:border-transparent rounded-full"
    >
      <img
        class="rounded-full cursor-pointer"
        src="https://picsum.photos/id/23/25/25"
        alt="woman in tech"
      />
      Woman in tech
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
