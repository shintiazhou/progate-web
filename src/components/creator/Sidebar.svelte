<script>
  import { goto } from "$app/navigation";
  import logo from "../../lib/Logo.png";
  import Button from "../Button.svelte";
  const routes = [
    {
      category: "General",
      items: [
        { title: "General", href: "/creator/" },
        { title: "Dashboard", href: "/creator/coming-soon" },
        { title: "Content Library", href: "/creator/coming-soon" },
        {
          title: "Content Performances",
          href: "/creator/coming-soon",
        },
        { title: "Feedback & Rating", href: "/creator/coming-soon" },
        { title: "Resource & Support", href: "/creator/coming-soon" },
      ],
    },
    {
      category: "Account",
      items: [
        { title: "Earnings", href: "/creator/coming-soon" },
        { title: "Subscriber", href: "/creator/coming-soon" },
        { title: "Achievement", href: "/creator/coming-soon" },
      ],
    },
  ];

  const handleLogout = () => {
    window.localStorage.clear();
    goto("/");
  };
</script>

<aside
  class="flex flex-col bg-white fixed inset-y-0 left-0 h-full px-4 py-10 shadow w-[300px] text-base overflow-hidden"
>
  <a href="/">
    <img src={logo} alt="logo" class="w-[100px] h-[30px] object-contain" />
  </a>

  <a href="/creator/new" class="block my-6"
    ><Button color="secondary">Start writing</Button></a
  >
  <div class="overflow-y-scroll flex flex-col gap-4 scrollbar">
    {#each routes as category}
      <small>
        {category.category}
      </small>
      {#each category.items as item}
        <a
          class="text-base ml-4 font-semibold hover:text-blue-500"
          href={item.href}>{item.title}</a
        >
      {/each}
    {/each}
  </div>
  <div class="h-[140px] w-full" />
  <div class="absolute bottom-0 py-6 border-t bg-white left-0 px-4 w-full">
    <div>
      <strong class="text-base"> Tech savvy sisters </strong>
      <p>woman_in_tech@wpu.com</p>
      <button
        on:click={handleLogout}
        class="font-medium mt-3 cursor-pointer opacity-50 underline text-base"
      >
        Logout
      </button>
    </div>
  </div>
</aside>
