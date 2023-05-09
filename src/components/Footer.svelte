<script>
  import gojek from "../lib/logos/gojek.png";
  import FaTwitter from "svelte-icons/fa/FaTwitter.svelte";
  import FaFacebookF from "svelte-icons/fa/FaFacebookF.svelte";
  import FaInstagram from "svelte-icons/fa/FaInstagram.svelte";
</script>

<footer>
  <div class="border px-10 py-4 flex items-center justify-between flex-wrap">
    <div class="flex justify-start">
      <a
        href="/articles"
        class="text-gray-400 px-7 py-2 rounded-md text-sm font-medium"
        >Articles</a
      >
      <a
        href="/forum"
        class="text-gray-400 px-7 py-2 rounded-md text-sm font-medium">Forum</a
      >
      <a
        href="/pricing"
        class="text-gray-400 px-7 py-2 rounded-md text-sm font-medium"
        >Pricing</a
      >
      <a
        href="/contact"
        class="text-gray-400 px-7 py-2 rounded-md text-sm font-medium"
        >Contact</a
      >
    </div>
    <div class="flex items-center">
      <img
        src={gojek}
        alt="gojek"
        class="w-[100px] h-[30px] object-contain mr-6"
      />
      <img src={gojek} alt="gojek" class="w-[100px] h-[30px] object-contain" />
    </div>
  </div>

  <div class="border px-10 py-1 flex items-center justify-between flex-wrap">
    <div class="flex justify-start">
      <p class="text-gray-400 px-7 py-2 rounded-md text-sm font-medium">
        &copy; 2023 - Progate | All right reserved
      </p>
    </div>

    <div class="flex items-center">
      <div class="mx-5 w-[20px] h-[20px]"><FaTwitter /></div>
      <div class="mx-5 w-[20px] h-[20px]"><FaFacebookF /></div>
      <div class="mx-5 w-[20px] h-[20px]"><FaInstagram /></div>
    </div>
  </div>
</footer>
