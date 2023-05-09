<script>
  import GoX from "svelte-icons/go/GoX.svelte";
  import GoCheck from "svelte-icons/go/GoCheck.svelte";

  const divider = "border-t border-gray-300 my-4";
</script>

<div
  class="flex flex-col justify-between bg-secondary text-light p-4 rounded-xl max-w-[400px] mx-auto"
>
  <div class="top">
    <h1 class="mb-4">Basic</h1>
    <p class="mb-4 divide-x-0">
      Limited selection of Programming Knowledge Platform content for free, with
      the option to upgrade to a paid subscription for more resources.
    </p>

    <div class={divider} />

    <ul>
      <li class="flex items-center gap-2">
        <div class="h-4 w-4"><GoCheck /></div>
        Access to learning resources
      </li>
      <li class="flex items-center gap-2">
        <div class="h-4 w-4"><GoX /></div>
        Premium content
      </li>
      <li class="flex items-center gap-2">
        <div class="h-4 w-4"><GoX /></div>
        Offline access to content
      </li>
      <li class="flex items-center gap-2">
        <div class="h-4 w-4"><GoX /></div>
        Gamification features
      </li>
    </ul>

    <div class={divider} />
  </div>
</div>
