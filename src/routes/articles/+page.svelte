<script>
  import image1 from "../../lib/homepage/image-1.png";
  import image2 from "../../lib/homepage/image-2.png";
  import FaHome from "svelte-icons/fa/FaHome.svelte";
  import FaSearch from "svelte-icons/fa/FaSearch.svelte";
  import FaCrown from "svelte-icons/fa/FaCrown.svelte";
  import FaRegBookmark from "svelte-icons/fa/FaRegBookmark.svelte";
</script>

<div
  class="flex flex-col md:flex-row items-center justify-between flex-wrap bg-primary py-3 px-10"
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
      href="/signin"
      class="bg-transparent hover:bg-gray-700 hover:text-white text-black font-medium py-2 px-4 md:py-2 md:px-10 border border-black hover:border-transparent rounded"
    >
      Sign In
    </a>
  </div>
</div>

<div class="flex">
  <div class="bg-white flex-grow-0 w-2/10">
    <div class="bg-slate-50 ml-12 p-4 mr-8 my-6 rounded-lg">
      <p class="text-base">Category</p>
      <button
        class="bg-[#ABA8DD] hover:bg-indigo-300 text-white py-2 px-4 m-1 rounded-full"
      >
        Beginner
      </button>

      <button
        class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-full"
      >
        intermediate
      </button>
      <button
        class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-full"
      >
        advance
      </button>
    </div>

    <div class="bg-slate-50 ml-12 p-4 mr-8 my-6 rounded-lg">
      <p class="text-base">Your Topics</p>
      <a href="/" class="text-cyan-900 text-sm font-medium my-3 block">React</a>
      <a href="/" class="text-cyan-900 text-sm font-medium my-3 block">Nextjs</a
      >
      <a href="/" class="text-cyan-900 text-sm font-medium my-3 block"
        >Tailwind</a
      >
      <a href="/" class="text-cyan-900 text-sm font-medium my-3 block"
        >React Hook</a
      >
      <a href="/" class="text-cyan-900 text-sm font-medium my-3 block">Agile</a>
      <a href="/" class="text-cyan-900 text-sm font-medium my-3 block">SEO</a>
      <a href="/" class="text-cyan-900 text-sm font-medium">Web Dev</a>
    </div>
  </div>

  <!-- Content -->
  <div class="bg-white flex-grow">
    <div class="py-5 border-b border-gray-300">
      <button
        class="bg-[#6CA1BD] hover:bg-cyan-800 text-white py-3 px-4 m-1 rounded-full"
      >
        Recommendation
      </button>
      <button
        class="bg-slate-200 hover:bg-slate-300 py-3 px-4 m-1 rounded-full"
      >
        Latest
      </button>
      <button
        class="bg-slate-200 hover:bg-slate-300 py-3 px-4 m-1 rounded-full"
      >
        Trending
      </button>
    </div>

    <div
      class="flex flex-col md:flex-row py-6 bg-white border-b border-gray-300"
    >
      <div class="w-full md:w-1/3 flex">
        <img
          class="w-full rounded-lg shadow-lg"
          src={image2}
          alt="Article Picture"
        />
      </div>
      <div class="w-full md:w-2/3 pl-6 flex flex-col">
        <div class="flex items-center">
          <div class="w-9 h-9 rounded-full overflow-hidden mr-3">
            <img
              class="w-full h-full object-cover flex-shrink-0"
              src={image1}
              alt="Profile Picture"
            />
          </div>
          <div>
            <h3 class="text-xs md:text-sm font-light">Jane Doe</h3>
          </div>
          <div>
            <ul class="list-disc p-4 text-xs md:text-sm font-light ml-5">
              <li>3 min read</li>
            </ul>
          </div>
          <div class="ml-auto">
            <button
              class="bg-[#FACE2E] text-white rounded-md w-10 h-8 flex items-center justify-center"
            >
              <!-- logo here -->
              <div class="w-[20px] h-[20px]"><FaCrown /></div>
            </button>
          </div>
        </div>
        <h2 class="text-lg md:text-xl mb-2 font-medium">
          A step by step SEO tutorial for beginnners
        </h2>
        <p class="text-gray-700 leading-relaxed text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          alias ut atque rem expedita beatae ab suscipit quas laboriosam et amet
          vel voluptas sunt laudantium, veritatis, iure minus harum. Porro!
        </p>
        <div class="flex items-center mt-1 mb-3">
          <div>
            <button
              class="bg-slate-300 hover:bg-slate-400 py-2 px-3 text-xs md:text-sm m-1 rounded-full"
            >
              SEO
            </button>
          </div>
          <div class="ml-auto">
            <button class="flex items-center justify-center text-slate-400">
              <div class="w-[30px] h-[30px]"><FaRegBookmark /></div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row py-6 bg-white border-b border-gray-300"
    >
      <div class="w-full md:w-1/3 flex">
        <img
          class="w-full rounded-lg shadow-lg"
          src={image1}
          alt="Article Picture"
        />
      </div>
      <div class="w-full md:w-2/3 pl-6 flex flex-col">
        <div class="flex items-center">
          <div class="w-9 h-9 rounded-full overflow-hidden mr-3">
            <img
              class="w-full h-full object-cover flex-shrink-0"
              src={image2}
              alt="Profile Picture"
            />
          </div>
          <div>
            <h3 class="text-xs md:text-sm font-light">Jane Doe</h3>
          </div>
          <div>
            <ul class="list-disc p-4 text-xs md:text-sm font-light ml-5">
              <li>3 min read</li>
            </ul>
          </div>
        </div>
        <h2 class="text-lg md:text-xl mb-2 font-medium">
          A step by step SEO tutorial for beginnners
        </h2>
        <p class="text-gray-700 leading-relaxed text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          alias ut atque rem expedita beatae ab suscipit quas laboriosam et amet
          vel voluptas sunt laudantium, veritatis, iure minus harum. Porro!
        </p>
        <div class="flex items-center mt-1 mb-3">
          <div>
            <button
              class="bg-slate-300 hover:bg-slate-400 py-2 px-3 text-xs md:text-sm m-1 rounded-full"
            >
              SEO
            </button>
          </div>
          <div class="ml-auto">
            <button class="flex items-center justify-center text-slate-400">
              <div class="w-[30px] h-[30px]"><FaRegBookmark /></div>
            </button>
          </div>
        </div>
      </div>
    </div>

    <div
      class="flex flex-col md:flex-row py-6 bg-white border-b border-gray-300"
    >
      <div class="w-full md:w-1/3 flex">
        <img
          class="w-full rounded-lg shadow-lg"
          src={image2}
          alt="Article Picture"
        />
      </div>
      <div class="w-full md:w-2/3 pl-6 flex flex-col">
        <div class="flex items-center">
          <div class="w-9 h-9 rounded-full overflow-hidden mr-3">
            <img
              class="w-full h-full object-cover flex-shrink-0"
              src={image1}
              alt="Profile Picture"
            />
          </div>
          <div>
            <h3 class="text-xs md:text-sm font-light">Jane Doe</h3>
          </div>
          <div>
            <ul class="list-disc p-4 text-xs md:text-sm font-light ml-5">
              <li>3 min read</li>
            </ul>
          </div>
        </div>
        <h2 class="text-lg md:text-xl mb-2 font-medium">
          A step by step SEO tutorial for beginnners
        </h2>
        <p class="text-gray-700 leading-relaxed text-base md:text-lg">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit
          alias ut atque rem expedita beatae ab suscipit quas laboriosam et amet
          vel voluptas sunt laudantium, veritatis, iure minus harum. Porro!
        </p>
        <div class="flex items-center mt-1 mb-3">
          <div>
            <button
              class="bg-slate-300 hover:bg-slate-400 py-2 px-3 text-xs md:text-sm m-1 rounded-full"
            >
              SEO
            </button>
          </div>
          <div class="ml-auto">
            <button class="flex items-center justify-center text-slate-400">
              <div class="w-[30px] h-[30px]"><FaRegBookmark /></div>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-white flex-grow-0 w-3/10">
    <div class="bg-slate-50 ml-8 p-4 mr-12 my-6 rounded-lg">
      <p class="text-base">Topics</p>
      <button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-lg">
        HTML
      </button>
      <button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-lg">
        CSS
      </button>
      <button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-lg">
        Styling
      </button>
      <button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-lg">
        React.js
      </button>
      <button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-lg">
        Tailwind
      </button>
      <button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-lg">
        Svelte
      </button>
      <button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-lg">
        Backend
      </button>
      <button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-lg">
        DevOps
      </button>
      <button class="bg-slate-200 hover:bg-slate-300 py-2 px-4 m-1 rounded-lg">
        Infrastructure
      </button>
    </div>

    <div class="bg-slate-50 ml-8 p-4 mr-12 my-6 rounded-lg">
      <p class="text-base mb-2">Writer to follow</p>
      <div class="flex items-center mb-3">
        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            class="w-full h-full object-cover flex-shrink-0"
            src={image1}
            alt="Profile Picture"
          />
        </div>
        <div>
          <h3 class="text-lg font-bold">Sandhika Galih</h3>
          <p class="text-gray-500 text-base">Lecturer and Content Creator</p>
        </div>
      </div>

      <div class="flex items-center">
        <div class="w-12 h-12 rounded-full overflow-hidden mr-4">
          <img
            class="w-full h-full object-cover flex-shrink-0"
            src={image2}
            alt="Profile Picture"
          />
        </div>
        <div>
          <h3 class="text-lg font-bold">Content Creator</h3>
          <p class="text-gray-500 text-base">Senior Software Engineer</p>
        </div>
      </div>
    </div>

    <div class="bg-slate-50 ml-8 p-4 mr-12 my-6 rounded-lg">
      <p class="text-base mb-2">Discuss</p>
      <p class="mb-2 py-3 border-b border-gray-300 text-cyan-900">
        Why does people still using PHP?
      </p>
      <p class="mb-2 py-3 border-b border-gray-300 text-cyan-900">
        Is AI helping us or replacing us?
      </p>
      <p class="py-3 text-cyan-900">What are the best free learning website?</p>
    </div>
  </div>
</div>
