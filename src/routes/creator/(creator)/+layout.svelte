<script>
  import { onMount } from "svelte";
  import Sidebar from "../../../components/creator/Sidebar.svelte";
  onMount(() => {
    const isLoggedIn = localStorage.getItem("logged-in");

    if (!isLoggedIn) {
      window.location.replace("/");
    }
  });
</script>

<svelte:head>
  <title>Creator | Progate</title>
  <meta
    name="description"
    content="Discover and explore the Progate Creator program, where you can build and share your own coding projects with the community."
  />
  <meta name="viewport" content="width=1024" />
</svelte:head>
<div>
  <Sidebar />
  <div class="ml-[300px]">
    <slot />
  </div>
</div>
