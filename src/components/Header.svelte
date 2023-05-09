<script>
  import gojek from "../lib/logos/gojek.png";
</script>

<header
  class="flex items-center justify-between flex-wrap bg-primary py-3 px-5 md:px-10"
>
  <div class="flex items-center flex-shrink-0 text-white mr-6">
    <a href="/">
      <img src={gojek} alt="gojek" class="w-[100px] h-[30px] object-contain" />
    </a>
  </div>
  <div class="flex justify-center w-full md:w-auto">
    <a
      href="/articles"
      class="text-black hover:bg-gray-700 hover:text-white px-4 md:px-7 py-2 rounded-md text-sm font-medium"
      >Articles</a
    >
    <a
      href="/forum"
      class="text-black hover:bg-gray-700 hover:text-white px-4 md:px-7 py-2 rounded-md text-sm font-medium"
      >Forum</a
    >
    <a
      href="/pricing"
      class="text-black hover:bg-gray-700 hover:text-white px-4 md:px-7 py-2 rounded-md text-sm font-medium"
      >Pricing</a
    >
    <a
      href="/contact"
      class="text-black hover:bg-gray-700 hover:text-white px-4 md:px-7 py-2 rounded-md text-sm font-medium"
      >Contact</a
    >
  </div>
  <div class="flex items-center">
    <a
      href="/signin"
      class="bg-transparent hover:bg-gray-700 hover:text-white text-black font-medium py-2 px-5 md:px-10 border border-black hover:border-transparent rounded"
    >
      Sign In
    </a>
  </div>
</header>
