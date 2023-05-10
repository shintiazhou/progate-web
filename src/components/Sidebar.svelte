<script>
  export let toggleMenu;
  export let isOpen;
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
  ];
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<div
  class={`fixed bg-black/50 inset-0 z-10 transition-all ${
    isOpen ? "block" : "hidden"
  }`}
  on:click={toggleMenu}
/>
<div
  class={`z-50 sidebar bg-light text-dark flex flex-col p-6 ${
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
