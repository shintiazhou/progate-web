<script>
  import Discussion from "../../components/articles/Discussions.svelte";
  import Topics from "../../components/articles/Topics.svelte";
  import Levels from "../../components/articles/Levels.svelte";
  import Writers from "../../components/articles/Writers.svelte";
  import SearchHeader from "../../components/SearchHeader.svelte";
  import FaPlus from "svelte-icons/fa/FaPlus.svelte";
  import IoIosChatbubbles from "svelte-icons/io/IoIosChatbubbles.svelte";
</script>

<SearchHeader />
<div class="bg-white flex px-4 gap-10">
  <div class="flex-col w-2/10 hidden lg:flex max-w-[300px] px-6 gap-6 mt-10">
    <Levels />
    <Topics />
  </div>

  <!-- Content -->
  <div class="w-full mt-9">
    <div
      class="bg-[#FAFBFE] text-black flex rounded-full outline-none text-sm font-medium w-72 md:w-auto justify-between items-center"
    >
      <input
        class="bg-[#FAFBFE] py-2 pl-2 w-full rounded-full outline-none text-black text-sm font-medium"
        type="search"
        name="search"
        placeholder="Add new thread"
      />
      <button class="bg-[#2B546A] text-white py-1 px-1 rounded-lg">
        <div class="w-[20px] h-[20px]"><FaPlus /></div>
      </button>
    </div>
    <p class="font-semibold text-xl my-4">For You</p>

    <div class="py-6 bg-slate-100 rounded-lg p-4 mx-auto my-5 max-w-screen-lg">
      <div class="text-[#254C60] font-medium text-lg mb-4">
        10 Bad Habits to Avoid as a Developer
      </div>
      <div class="font-medium text-xm mb-6">
        As a developer, your habits play a crucial role in your success. While
        some habits can boost your productivity and enhance your coding skills,
        others can hinder your progress and impact your work quality.
      </div>
      <div class="flex flex-col sm:flex-row">
        <div class="flex-grow">
          <button
            class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
          >
            HTML
          </button>
          <button
            class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
          >
            CSS
          </button>
          <button
            class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
          >
            Styling
          </button>
        </div>
        <div>
          <button
            class="bg-[#E3EEFF] py-1 px-7 m-1 rounded-lg relative sm:inline-block"
          >
            <div class="absolute top-1/2 left-2 transform -translate-y-1/2">
              <div class="w-4 h-4"><IoIosChatbubbles /></div>
            </div>
            Add answer
          </button>
        </div>
      </div>
    </div>

    <div class="py-6 bg-slate-100 rounded-lg p-4 mx-auto my-5 max-w-screen-lg">
      <div class="text-[#254C60] font-medium text-lg mb-4">
        What's Your Favorite Text Editor or Terminal Emulator?
      </div>
      <div class="font-medium text-xm mb-6">
        When it comes to coding, your choice of text editor or terminal emulator
        can have a big impact on your productivity and workflow. So, we want to
        know: what's your favorite text editor or terminal emulator, and why?
      </div>
      <div class="flex flex-col sm:flex-row">
        <div class="flex-grow">
          <button
            class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
          >
            HTML
          </button>
          <button
            class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
          >
            CSS
          </button>
          <button
            class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
          >
            Styling
          </button>
        </div>
        <div>
          <button
            class="bg-[#E3EEFF] py-1 px-7 m-1 rounded-lg relative sm:inline-block"
          >
            <div class="absolute top-1/2 left-2 transform -translate-y-1/2">
              <div class="w-4 h-4"><IoIosChatbubbles /></div>
            </div>
            Add answer
          </button>
        </div>
      </div>
    </div>

    <div class="py-6 bg-slate-100 rounded-lg p-4 mx-auto my-5 max-w-screen-lg">
      <div class="text-[#254C60] font-medium text-lg mb-4">
        What's the Most Useless or Wasteful Software You've Ever Encountered?
      </div>
      <div class="font-medium text-xm mb-6">
        Useless software is frustrating, especially when it comes to wasting
        time and resources. As developers, we come across various software
        applications throughout our careers, and some are helpful while others
        are a waste of time.
      </div>
      <div class="flex flex-col sm:flex-row">
        <div class="flex-grow">
          <button
            class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
          >
            HTML
          </button>
          <button
            class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
          >
            CSS
          </button>
          <button
            class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
          >
            Styling
          </button>
        </div>
        <div>
          <button
            class="bg-[#E3EEFF] py-1 px-7 m-1 rounded-lg relative sm:inline-block"
          >
            <div class="absolute top-1/2 left-2 transform -translate-y-1/2">
              <div class="w-4 h-4"><IoIosChatbubbles /></div>
            </div>
            Add answer
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="flex-col w-2/10 hidden lg:flex max-w-[400px] px-6 gap-6 mt-10">
    <Topics />
    <Writers />
    <Discussion />
  </div>
</div>
