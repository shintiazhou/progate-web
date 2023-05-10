<script>
  import Topics from "../../../components/articles/Topics.svelte";
  import Discussions from "../../../components/articles/Discussions.svelte";
  import Question from "../../../components/singleforum/Question.svelte";
  import Answer from "../../../components/singleforum/Answer.svelte";
  import SearchHeader from "../../../components/SearchHeader.svelte";
</script>

<svelte:head>
  <title>[article Title] | Progate</title>
  <meta
    name="description"
    content="Progate is an online learning platform that offers various courses on programming, web development, and more."
  />
</svelte:head>

<SearchHeader />
<div class="flex flex-col lg:flex-row px-4">
  <main class="w-full px-6 mt-10">
    <Question />
    <Answer />
  </main>

  <aside class="flex-col w-2/10 hidden lg:flex max-w-[400px] gap-6 px-6 mt-10">
    <Topics />
    <Discussions />
  </aside>
</div>
