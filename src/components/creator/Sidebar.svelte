<script>
  import { goto } from "$app/navigation";
  export const routes = [
    {
      category: "General",
      items: [
        { title: "General", href: "/creator/" },
        { title: "Dashboard", href: "/creator/dashboard" },
        { title: "Content Library", href: "/creator/content-library" },
        {
          title: "Content Performances",
          href: "/creator/content-performances",
        },
        { title: "Feedback & Rating", href: "/creator/feedback-rating" },
        { title: "Resource & Support", href: "/creator/resource-support" },
      ],
    },
    {
      category: "Account",
      items: [
        { title: "Earnings", href: "/creator/earnings" },
        { title: "Subscriber", href: "/creator/subscriber" },
        { title: "Achievement", href: "/creator/achievement" },
      ],
    },
  ];

  export const handleLogout = () => {
    window.localStorage.clear();
    goto("/");
  };
</script>

<aside
  class="flex flex-col gap-4 bg-white fixed inset-y-0 left-0 h-screen overflow-hidden p-4 shadow w-[230px]"
>
  {#each routes as category}
    <small>
      {category.category}
    </small>
    {#each category.items as item}
      <a class="ml-4 font-semibold" href={item.href}>{item.title}</a>
    {/each}
  {/each}
  <div class="absolute bottom-0 py-6 border-t">
    <div>
      <strong> Tech savvy sisters </strong>
      <p>woman_in_tech@wpu.com</p>
      <button
        on:click={handleLogout}
        class="font-medium mt-3 cursor-pointer opacity-50 underline"
      >
        Logout
      </button>
    </div>
  </div>
</aside>
