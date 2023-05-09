<script>
  import FaTwitter from "svelte-icons/fa/FaTwitter.svelte";
  import FaFacebookF from "svelte-icons/fa/FaFacebookF.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
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

<footer>
  <div
    class="border px-4 md:px-10 py-4 flex items-center justify-between flex-wrap"
  >
    <div class="flex justify-start">
      {#each routes as route}
        <a
          href={route.href}
          class="text-gray-400 pr-7 py-2 rounded-md text-sm font-medium"
          >{route.title}</a
        >
      {/each}
    </div>
  </div>

  <div
    class="border px-4 md:px-10 py-1 flex items-center justify-between flex-wrap"
  >
    <div class="flex justify-start">
      <p class="text-gray-400 pr-7 py-2 rounded-md text-sm font-medium">
        &copy; 2023 - Progate | All right reserved
      </p>
    </div>

    <div class="flex items-center">
      <div class="cursor-pointer mx-5 w-[20px] h-[20px]"><FaTwitter /></div>
      <div class="cursor-pointer mx-5 w-[20px] h-[20px]"><FaFacebookF /></div>
      <div class="cursor-pointer mx-5 w-[20px] h-[20px]"><FaInstagram /></div>
    </div>
  </div>
</footer>
