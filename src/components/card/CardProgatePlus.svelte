<script>
  import GoCheck from "svelte-icons/go/GoCheck.svelte";
  import Button from "../Button.svelte";

  const divider = "border-t border-[#2B546A] my-4";
  //   const divider = "border-t border-[secondary] my-4"; //not working---need to fix this!!!
</script>

<div
  data-aos-delay="600"
  data-aos="fade-up"
  class="flex flex-col justify-between bg-white text-dark p-4 rounded-xl lg:scale-[1.05] shadow max-w-[400px] mx-auto"
>
  <div class="top">
    <h1 class="mb-4">Progate Plus</h1>
    <p class="mb-4 divide-x-0">
      Access to all premium content on the programming Knowledge Platform. Get
      unlimited offline access and gamification features.
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
      <h1>$9.99</h1>
      <small>/ per month</small>
    </div>

    <Button color="secondary" customClass="w-full">Sign Up</Button>
  </div>
</div>
