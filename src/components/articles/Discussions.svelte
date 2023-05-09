<script>
  const discussion = [
    "Code documentation: Who needs it anyway?",
    "Data structures: Just pick one and hope for the best",
    "Debugging: Because bugs are our best friends",
    "JavaScript frameworks: Because we don't have enough already",
    "Clean code: What's the fun in that?",
    "Version control: Who needs to collaborate anyway?",
    "Slow database queries: Embrace the wait",
    "Agile development: Because chaos is the new norm",
  ];
</script>

<div class="bg-slate-50 p-4 rounded-lg">
  <p class="mb-2">Discuss</p>
  {#each discussion as text}
    <p
      class="mb-1 py-1 border-b border-gray-300 text-cyan-900 hover:text-blue-500 cursor-pointer"
    >
      {text}
    </p>
  {/each}
</div>
