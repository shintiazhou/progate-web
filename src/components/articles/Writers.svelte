<script>
  const writersToFollow = [
    {
      id: 12345,
      name: "John Doe",
      job: "Frontend Developer",
      image: "https://picsum.photos/id/101/150/150",
    },
    {
      id: 67890,
      name: "Sarah Johnson",
      job: "Backend Developer",
      image: "https://picsum.photos/id/102/150/150",
    },
    {
      id: 54321,
      name: "Michael Smith",
      job: "UI/UX Designer",
      image: "https://picsum.photos/id/103/150/150",
    },
  ];
</script>

<div class="bg-slate-50 p-4 rounded-lg">
  <p class="mb-2">Writer to follow</p>
  {#each writersToFollow as writer, index}
    <a
      class="flex items-center mb-3 hover:opacity-60"
      href={"/writer/" + (index + 1)}
    >
      <div class="w-12 h-12 rounded-full overflow-hidden mr-4 mb-1">
        <img
          class="w-full h-full object-cover"
          src={writer.image}
          alt="Profile Picture2"
        />
      </div>
      <div>
        <h3 class="font-bold">{writer.name}</h3>
        <p class="text-gray-500 text-xs">{writer.job}</p>
      </div>
    </a>
  {/each}
</div>
