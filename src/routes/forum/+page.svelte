<script>
  import Discussion from "../../components/articles/Discussions.svelte";
  import Topics from "../../components/articles/Topics.svelte";
  import Levels from "../../components/articles/Levels.svelte";
  import Writers from "../../components/articles/Writers.svelte";
  import SearchHeader from "../../components/SearchHeader.svelte";
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";

  import ForumItems from "../../components/forums/ForumItems.svelte";
  import YourTopic from "../../components/articles/YourTopic.svelte";
</script>

<svelte:head>
  <title>Forum | Progate</title>
  <meta
    name="description"
    content="Join the Progate forum and engage in discussions with other learners about programming, web development, and more."
  />
</svelte:head>

<SearchHeader />
<div class="bg-white flex px-4 gap-10">
  <div class="flex-col w-2/10 hidden lg:flex max-w-[300px] px-6 gap-6 mt-10">
    <Levels />
    <YourTopic />
  </div>

  <!-- Content -->
  <div class="w-full mt-12">
    <div class="flex gap-4">
      <input
        class="bg-[#FAFBFE] py-2 pl-2 w-full rounded-full outline-none text-black text-sm font-medium"
        type="search"
        name="search"
        placeholder="Add new thread"
      />
      <button class="bg-[#2B546A] text-white p-2 rounded-lg">
        <div class="w-[20px] h-[20px]"><FaPlus /></div>
      </button>
    </div>
    <p class="font-semibold text-xl my-4">For You</p>

    <ForumItems />
  </div>

  <div class="flex-col w-2/10 hidden lg:flex max-w-[400px] px-6 gap-6 mt-10">
    <Topics />
    <Writers />
    <Discussion />
  </div>
</div>
