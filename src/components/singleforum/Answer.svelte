<script>
  import Button from "../Button.svelte";
  import PicDefault from "../../lib/Default-welcomer.png";
  export let answer;
</script>

<article class="p-4 my-6 bg-slate-100 rounded-xl">
  <p>
    {answer.answer}
  </p>

  <div class="flex flex-col md:flex-row justify-between mt-6 gap-4">
    <div class="flex gap-4 items-center">
      <div class="w-[50px] h-[50px] bg-gray-100 rounded-full overflow-hidden">
        <img
          class="w-full h-full"
          src={answer.profileImage}
          alt={answer.answer}
        />
      </div>
      <div>
        <h3>{answer.username}</h3>
        <p>{answer.commentedDate}</p>
      </div>
    </div>

    <div class="reaction-btn flex gap-4">
      {#each answer.reactions as reaction}
        <Button color="primary"
          ><span class="text-lg">{reaction.emoji}</span>
          {reaction.count}</Button
        >
      {/each}
    </div>
  </div>
</article>
