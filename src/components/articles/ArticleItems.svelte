<script>
  import image1 from "../../lib/homepage/image-1.png";
  import FaCrown from "svelte-icons/fa/FaCrown.svelte";
  import MdBookmark from "svelte-icons/md/MdBookmark.svelte";
  import MdBookmarkBorder from "svelte-icons/md/MdBookmarkBorder.svelte";
  import MdEdit from "svelte-icons/md/MdEdit.svelte";
  export let allowEdit;
  const articles = [
    {
      author: "John Doe",
      authorProfilePicture: "https://www.example.com/profile/johndoe.jpg",
      articleCoverPicture: "https://picsum.photos/id/101/400/400",
      durationToRead: "10 minutes",
      title: "Introduction to JavaScript",
      description: "Learn the basics of JavaScript programming language.",
      tags: ["JavaScript", "Programming", "Web Development"],
      isPremium: false,
      isSaved: false,
      releaseDate: "2023-05-01",
    },
    {
      author: "Jane Smith",
      authorProfilePicture: "https://www.example.com/profile/janesmith.jpg",
      articleCoverPicture: "https://picsum.photos/id/102/400/400",
      durationToRead: "8 minutes",
      title: "Python Tips and Tricks",
      description:
        "Discover useful tips and tricks for efficient Python programming.",
      tags: ["Python", "Programming"],
      isPremium: true,
      isSaved: false,
      releaseDate: "2023-04-25",
    },
    {
      author: "Sam Johnson",
      authorProfilePicture: "https://www.example.com/profile/samjohnson.jpg",
      articleCoverPicture: "https://picsum.photos/id/103/400/400",
      durationToRead: "15 minutes",
      title: "Mastering CSS Grid Layout",
      description: "Learn how to create complex web layouts using CSS Grid.",
      tags: ["CSS", "Web Development"],
      isPremium: false,
      isSaved: true,
      releaseDate: "2023-04-20",
    },
    {
      author: "Emily Wilson",
      authorProfilePicture: "https://www.example.com/profile/emilywilson.jpg",
      articleCoverPicture: "https://picsum.photos/id/104/400/400",
      durationToRead: "12 minutes",
      title: "Getting Started with React",
      description:
        "A beginner's guide to building web applications with React framework.",
      tags: ["React", "JavaScript", "Web Development"],
      isPremium: false,
      isSaved: true,
      releaseDate: "2023-04-15",
    },
  ];
</script>

{#each articles as item, index}
  <a href={(allowEdit ? "/creator/edit/" : "/articles/") + (index + 1)}>
    <div
      class="flex flex-col xl:flex-row py-3 my-4 bg-white border-b border-gray-300 gap-4 cursor-pointer"
    >
      <img
        class="object-cover w-full xl:w-1/4 min-w-[200px] min-h-[200px] max-h-[200px]"
        src={item.articleCoverPicture}
        alt={item.title}
      />

      <div class="w-full flex flex-col h-full gap-1">
        <div>
          <div class="flex items-center">
            <div class="w-9 h-9 rounded-full overflow-hidden mr-3">
              <img
                class="w-full h-full object-cover min"
                src={image1}
                alt="Profile Picture3"
              />
            </div>
            <div>
              <h3 class="text-xs md:text-sm font-light">{item.author}</h3>
            </div>
            <div>
              <ul class="list-disc p-4 text-xs md:text-sm font-light ml-5">
                <li>{item.durationToRead} read</li>
              </ul>
            </div>
            {#if allowEdit}
              <a class="ml-auto" href={"/creator/edit/" + (index + 1)}>
                <div
                  class="bg-secondary text-white rounded-md p-2 flex items-center justify-center"
                >
                  Edit <span class="w-[20px] h-[20px] ml-2">
                    <MdEdit />
                  </span>
                </div>
              </a>
            {/if}
            {#if item.isPremium && !allowEdit}
              <div class="ml-auto">
                <div
                  class="bg-[#FACE2E] text-white rounded-md p-2 flex items-center justify-center"
                >
                  <!-- logo here -->
                  <div class="w-[18px] h-[18px] -mb-1"><FaCrown /></div>
                </div>
              </div>
            {/if}
          </div>
          <h2 class="text-lg md:text-xl font-medium">
            {item.title}
          </h2>
          <p class="text-gray-700 text-sm">
            {item.description}
          </p>
        </div>
        <div class="flex gap-2 mt-2">
          <div class="flex gap-2 flex-wrap">
            {#each item.tags as tag}
              <button class="bg-slate-200 px-3 text-xs rounded-full opacity-70">
                {tag}
              </button>
            {/each}
          </div>
          <div class="ml-auto">
            <button class="flex items-center justify-center text-slate-400">
              {#if item.isSaved}
                <div class="w-[30px] h-[30px]"><MdBookmark /></div>
              {:else}
                <div class="w-[30px] h-[30px]"><MdBookmarkBorder /></div>
              {/if}
            </button>
          </div>
        </div>
      </div>
    </div></a
  >
{/each}
