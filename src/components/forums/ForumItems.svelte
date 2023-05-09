<script>
  import IoIosChatbubbles from "svelte-icons/io/IoIosChatbubbles.svelte";
  const forumContent = [
    {
      title: "How can I handle null values in JavaScript?",
      description:
        "I'm working on a JavaScript project and I often encounter null values. What are the best practices and techniques for handling null values in JavaScript? Are there any specific functions or libraries that can help with null value handling?",
      tags: ["JavaScript", "Null Values", "Error Handling"],
    },
    {
      title: "What are the steps to set up a Django project?",
      description:
        "I'm new to Django and I want to start a new project. What are the necessary steps to set up a Django project from scratch? Are there any recommended project structure or configurations to follow for a standard Django project?",
      tags: ["Django", "Python", "Project Setup"],
    },
    {
      title: "How can I optimize database queries in Laravel?",
      description:
        "I have a Laravel application and I'm experiencing slow database queries. What are some techniques and best practices to optimize database queries in Laravel? Are there any specific ORM features or caching mechanisms that can help improve performance?",
      tags: ["Laravel", "PHP", "Database Optimization"],
    },
    {
      title: "How do I handle user authentication in a React.js app?",
      description:
        "I'm building a React.js application and I need to implement user authentication. What are the recommended approaches and libraries for handling user authentication in React.js? Are there any security considerations that I should be aware of?",
      tags: ["React.js", "User Authentication", "Security"],
    },
    {
      title:
        "What are the best practices for version control in collaborative projects?",
      description:
        "I'm working on a collaborative programming project with a team and we want to implement version control. What are the best practices and strategies for using version control systems like Git in collaborative projects? How can we avoid conflicts and ensure smooth collaboration?",
      tags: ["Version Control", "Git", "Collaborative Projects"],
    },
  ];
</script>

{#each forumContent as forum, id}
  <a href={"/forum/" + (id + 1)}>
    <div class="py-6 bg-slate-100 rounded-lg p-4 mx-auto my-5 max-w-screen-lg">
      <div class="text-[#254C60] font-medium text-lg mb-4">
        {forum.title}
      </div>
      <div class="font-medium text-xm mb-6">
        {forum.description}
      </div>
      <div class="flex flex-col sm:flex-row">
        <div class="flex-grow">
          {#each forum.tags as tag}
            <button
              class="bg-slate-200 hover:bg-slate-300 py-1 px-4 m-1 rounded-lg"
            >
              {tag}
            </button>
          {/each}
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
    </div></a
  >
{/each}
