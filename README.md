# Vanilla App Template
This project was created using Vite. For more information and customization options, refer to the documentation.

Creating a Repository from Template
Use this GoIT organization repository as a template to create your project repository. To do this, click on the Use this template button and select Create a new repository, as shown in the image.

![Creating repo from a template step 1](./assets/template-step-1.png)
Next, you will be directed to the page for creating a new repository. Fill in the repository name field, ensure that the repository is public, and then click the Create repository from template button.

![Creating repo from a template step 2](./assets/template-step-2.png)

Once the repository is created, you need to navigate to the settings of the created repository to the Settings > Actions > General tab, as shown in the image.

![Settings GitHub Actions permissions step 1](./assets/gh-actions-perm-1.png)

Scrolling to the bottom of the page, in the Workflow permissions section, select the option Read and write permissions and check the checkbox. This is necessary for automating the project deployment process.

![Settings GitHub Actions permissions step 2](./assets/gh-actions-perm-2.png)

Now you have your personal project repository, with the file and folder structure of the template repository. You can work with it like any other personal repository: clone it to your computer, write code, make commits, and push them to GitHub.

## Getting Started
1. Make sure you have the LTS version of Node.js installed on your computer. Download and install it if needed.
2. Install the project's basic dependencies in the terminal with the command npm install.
3. Start the development mode by running the command npm run dev in the terminal.
4. Open your browser and go to http://localhost:5173. This page will automatically reload after you save changes to project files.

## Files and Folders

Component markup files should be located in the src/partials folder and imported into the index.html file. For example, create a file with the header markup header.html in the partials folder and import it into index.html.
Style files should be located in the src/css folder and imported into HTML page files. For index.html, the style file would be named index.css.
Add images to the src/img folder. The builder optimizes them, but only during the deployment of the production version of the project. This happens in the cloud to avoid overloading your computer, as it can take a lot of time on weaker computers.

## Deployment

The production version of the project will be automatically built and deployed to GitHub Pages, into the gh-pages branch, whenever the main branch is updated. For example, after a direct push or a merged pull request. To do this, you need to change the value of the --base=/<REPO>/ flag in the package.json file for the build command, replacing <REPO> with the name of your repository, and then push the changes to GitHub.

json
Copy code
"build": "vite build --base=/<REPO>/",
Next, go to the GitHub repository settings (Settings > Pages) and set up serving the production version files from the /root folder of the gh-pages branch if it was not done automatically.

![GitHub Pages settings](./assets/repo-settings.png)

### Deployment Status

The deployment status of the latest commit is indicated by an icon next to its identifier.

Yellow color - the project is being built and deployed.
Green color - deployment was successful.
Red color - an error occurred during linting, building, or deployment.
You can view more detailed information about the status by clicking on the icon and following the Details link in the popup window.

![Deployment status](./assets/deploy-status.png)

### Live Page
After some time, usually a few minutes, you can view the live page at the link provided in the Settings > Pages tab of the repository settings. For example, here is the link to the live version for this repository:

https://goitacademy.github.io/vanilla-app-template/.

If you see a blank page, make sure there are no errors related to incorrect paths to CSS and JS project files (404 errors) in the Console tab of your browser. Most likely, you have the wrong value for the --base flag in the build command in the package.json file.

## How It Works

![How it works](./assets/how-it-works.png)
1. After each push to the main branch of the GitHub repository, a special script (GitHub Action) is triggered from the .github/workflows/deploy.yml file.
2. All repository files are copied to a server, where the project is initialized and undergoes linting and building before deployment.
3. If all steps are successful, the built production version of the project files is sent to the gh-pages branch. Otherwise, the execution log of the script will indicate the problem.
