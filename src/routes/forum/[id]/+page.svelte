<script>
  import { page } from "$app/stores";
  import Topics from "../../../components/articles/Topics.svelte";
  import Discussions from "../../../components/articles/Discussions.svelte";
  import Question from "../../../components/singleforum/Question.svelte";
  import Answer from "../../../components/singleforum/Answer.svelte";
  import SearchHeader from "../../../components/SearchHeader.svelte";
  import { forumItems } from "../../../constants/forum";

  const pageId = parseInt($page.params.id || "0") - 1;
</script>

<svelte:head>
  <title>{forumItems[pageId].title}</title>
  <meta name="description" content={forumItems[pageId].description} />
</svelte:head>

<SearchHeader />
<div class="flex flex-col lg:flex-row px-4 max-w-[1400px] mx-auto">
  <main class="w-full px-6 mt-10">
    <p class="mb-5 mt-4">
      <a href="/forum" class="underline">Forum</a> / {forumItems[pageId].title}
    </p>
    <Question forum={forumItems[pageId]} />
    <h1 class="counter text-[#254C60]">
      {forumItems[pageId].answers.length} Answer
    </h1>
    {#each forumItems[pageId].answers as answer}
      <Answer {answer} />
    {/each}
  </main>

  <aside class="flex-col w-2/10 hidden lg:flex max-w-[400px] gap-6 px-6 mt-10">
    <Topics />
    <Discussions />
  </aside>
</div>
