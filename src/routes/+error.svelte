<script>
  import { page } from "$app/stores";
</script>

<div
  class="h-screen bg-secondary text-light flex flex-col items-center justify-center"
>
  <h1>{$page.status}</h1>
  <p>{$page.error.message}</p>
  <br />
  <a href="/" class="underline">Go home</a>
</div>
