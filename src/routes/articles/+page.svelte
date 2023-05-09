<script>
  import FaHome from "svelte-icons/fa/FaHome.svelte";
  import FaSearch from "svelte-icons/fa/FaSearch.svelte";
  import Discussion from "../../components/articles/Discussions.svelte";
  import Topics from "../../components/articles/Topics.svelte";
  import ArticleItems from "../../components/articles/ArticleItems.svelte";
  import Categories from "../../components/articles/Categories.svelte";
  import Levels from "../../components/articles/Levels.svelte";
  import Writers from "../../components/articles/Writers.svelte";
</script>

<div
  class="bg-primary flex flex-col md:flex-row items-center justify-between flex-wrap py-3 px-10 transition-all"
>
  <div class="flex items-center flex-shrink-0 md:mr-6">
    <a href="/">
      <div class="mx-5 w-[30px] h-[30px]"><FaHome /></div>
    </a>

    <div
      class="flex rounded-full outline-none text-sm font-medium bg-white text-gray-900 w-auto md:w-72 justify-between items-center"
    >
      <input
        class="py-2 pl-2 pr-15 rounded-full outline-none text-sm font-medium bg-white text-gray-900"
        type="search"
        name="search"
        placeholder="Search"
      />
      <button class="bg-purple-950 text-white py-2 px-2 rounded-lg">
        <div class="w-[20px] h-[20px]"><FaSearch /></div>
      </button>
    </div>
  </div>

  <div class="flex items-center mt-4 md:mt-0">
    <a
      href="/login"
      class="bg-transparent hover:bg-gray-700 hover:text-white text-black font-medium py-2 px-4 md:py-2 md:px-10 border border-black hover:border-transparent rounded"
    >
      Sign In
    </a>
  </div>
</div>

<div class="bg-white flex px-4 gap-10">
  <div class="flex-col w-2/10 hidden lg:flex max-w-[300px] px-6 gap-6 mt-10">
    <Levels />
    <Topics />
  </div>

  <!-- Content -->
  <div class="w-full mt-4">
    <Categories />
    <ArticleItems />
  </div>

  <div class="flex-col w-2/10 hidden lg:flex max-w-[400px] px-6 gap-6 mt-10">
    <Topics />
    <Writers />
    <Discussion />
  </div>
</div>
