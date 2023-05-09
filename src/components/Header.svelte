<script>
  import logo from "../lib/Logo.png";
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
    {
      href: "/contact",
      title: "Contact",
    },
  ];

  export let isOpen = false;

  function toggleMenu() {
    isOpen = !isOpen;
  }
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={`fixed bg-black/50 inset-0 z-10 transition-all ${
    isOpen ? "block" : "hidden"
  }`}
  on:click={toggleMenu}
/>

<header
  class="z-30 fixed shadow inset-x-0 top-0 flex items-center justify-between flex-wrap bg-primary py-3 px-5 md:px-10"
>
  <a href="/" class="hidden lg:block">
    <img src={logo} alt="logo" class="w-[100px] h-[30px] object-contain" />
  </a>

  <div
    class={`sidebar bg-light text-dark flex flex-col p-6 ${
      isOpen ? " open" : ""
    }`}
  >
    <a href="/" on:click={() => (isOpen = false)}>
      <img src={logo} alt="logo" class="w-[100px] h-[30px] object-contain" />
    </a>
    <div class="flex flex-col gap-4 text-lg mt-10">
      {#each routes as route}
        <a
          on:click={() => (isOpen = false)}
          href={route.href}
          class="text-black hover:text-blue-600 rounded-md text-sm font-medium"
          >{route.title}</a
        >
      {/each}
    </div>
  </div>

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
  <a
    href="/login"
    class="bg-transparent hover:bg-gray-700 hover:text-white text-black font-medium py-2 px-5 md:px-10 border border-black hover:border-transparent rounded"
  >
    Sign In
  </a>
</header>

<style>
  .sidebar {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 240px;
    transform: translateX(-100%);
    transition: transform 0.3s ease-in-out;
  }

  .sidebar.open {
    transform: translateX(0);
  }
</style>
