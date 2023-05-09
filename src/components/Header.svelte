<script>
  import gojek from "../lib/logos/gojek.png";
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
</script>

<header
  class="z-30 fixed shadow inset-x-0 top-0 flex items-center justify-between flex-wrap bg-primary py-3 px-5 md:px-10"
>
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="/">
      <img src={gojek} alt="gojek" class="w-[100px] h-[30px] object-contain" />
    </a>
  </div>
  <div class="flex justify-center w-full md:w-auto">
    {#each routes as route}
      <a
        href={route.href}
        class="text-black hover:text-blue-600 px-4 md:px-7 py-2 rounded-md text-sm font-medium"
        >{route.title}</a
      >
    {/each}
  </div>
  <div class="flex items-center">
    <a
      href="/login"
      class="bg-transparent hover:bg-gray-700 hover:text-white text-black font-medium py-2 px-5 md:px-10 border border-black hover:border-transparent rounded"
    >
      Sign In
    </a>
  </div>
</header>
