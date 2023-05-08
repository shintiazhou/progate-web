<script>
  import GoCheck from "svelte-icons/go/GoCheck.svelte";
  import Button from "../Button.svelte";

  const divider = "border-t border-gray-300 my-4";
</script>

<div
  class="flex flex-col justify-between bg-secondary text-light p-4 rounded-xl"
>
  <div class="top">
    <h1 class="mb-4">Progate for Writers</h1>
    <p class="mb-4 divide-x-0">
      Become a creator on the Programming Knowledge Platform and earn up to 50%
      revenue share for your premium content, while also getting access to
      acommunity of writters and learners.
    </p>

    <div class={divider} />

    <ul>
      <li class="flex items-center gap-2">
        <div class="h-4 w-4"><GoCheck /></div>
        Access to learning resources
      </li>
      <li class="flex items-center gap-2">
        <div class="h-4 w-4"><GoCheck /></div>
        Premium content
      </li>
      <li class="flex items-center gap-2">
        <div class="h-4 w-4"><GoCheck /></div>
        Offline access to content
      </li>
      <li class="flex items-center gap-2">
        <div class="h-4 w-4"><GoCheck /></div>
        Gamification features
      </li>
    </ul>

    <div class={divider} />
  </div>

  <div class="bottom">
    <div class="pricing flex items-center gap-2 mb-4">
      <h1>$5.99</h1>
      <small>/ per month</small>
    </div>

    <Button color="secondary" customClass="border w-full">Sign Up</Button>
  </div>
</div>
