## Svelte Installation Steps

1. **Install Git:**
   - Download and install Git from the official website: [https://git-scm.com/downloads](https://git-scm.com/downloads)

2. **Install Node.js:**
   - Download and install Node.js from the official website: [https://nodejs.org](https://nodejs.org)
   - Choose the LTS (Long-Term Support) version for stability.
   - 
2. **Install NPM:**
   - Open command prompt, paste 
     ```shell
     npm install -g npm
     ```
3. **Optional: Verify Git and Node.js Installation:**
   - Open a command prompt or terminal and run the following commands to verify the installations:
     ```shell
     git --version
     node --version
     npm --version
     ```

4. **Clone the GitHub Repository:**
   - Change to the directory where you want to clone the repository, right click -> open in new terminal.
   - Run the following command to clone the repository:
     ```shell
     git clone https://github.com/shintiazhou/progate-web.git
     ```
     ![image](https://user-images.githubusercontent.com/73226439/236715386-5f740a6f-e6f8-4b3f-8508-4ba0f9a11280.png)
![image](https://user-images.githubusercontent.com/73226439/236715442-9e357fc0-7874-407e-9d72-4b3bb4f9858d.png)


5. **Install Project Dependencies:**
   - Open the project inside vscode, open new terminal, and Run the following command
     ```shell
     npm install
     ```
6. **Install [svelte extensions](https://marketplace.visualstudio.com/items?itemName=svelte.svelte-vscode)**
7. **Start the Development Server:**
   - After the dependencies are installed, run the following command to start the development server:
     ```shell
     npm run dev
     ```
   - The development server will start, and you can access the application in your web browser at `http://localhost:5173/`.


8. **Working on project:**
   - You can read more at https://reuters-graphics.github.io/docs_graphics-kit/for_developers/components/
   - For styling we use Tailwind Css , so check out https://tailwindcss.com/ for further docs
   - In short, to work on new page you can create a folder inside routes folder, create file called +page.svelte and you're ready to write your code!
   
9. **Working with git & github:**
   - Before you push the changes, make sure you create a new branch
   for example: ![image](https://user-images.githubusercontent.com/73226439/236714647-1bc2fb46-a5d7-4fba-96ef-6117f979b594.png)
   - After you're done with your part, create commit msg and push.
   
   ![image](https://user-images.githubusercontent.com/73226439/236714933-42c3b58b-7f9c-4f91-ba16-7be6ae20b0b9.png)
   
   ![image](https://user-images.githubusercontent.com/73226439/236714944-c9ad0bbc-840e-42a9-b5d4-69c97d99b8f5.png)


 