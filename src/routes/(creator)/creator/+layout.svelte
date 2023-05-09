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

<div>
  <Sidebar />
  <div class="ml-[230px]">
    <slot />
  </div>
</div>
