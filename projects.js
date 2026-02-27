const username = "ayates89";

async function getRepos(username, selectedRepo = []) {
    try {
        const response = await fetch(`https://api.github.com/users/${username}/repos`);
        const repos = await response.json();
      const selectedRepos = repos.filter(repo => selectedRepo.includes(repo.name));
        displayRepos(selectedRepos);
    } catch (error) {
        console.error("Error fetching repositories:", error);
    }
}
function displayRepos(repos) {
    const repoList = document.getElementById("repo-container");
    repoList.innerHTML = "";
    
    repos.forEach(repo => {
        const repoItem = document.createElement("div");
        repoItem.classList.add("repo-item");
        
        repoItem.innerHTML = `
            <h3>${repo.name}</h3>
            <p>${repo.description || "No description provided"}</p>
            <a href="${repo.html_url}" target="_blank">View on GitHub</a>
        `;
        repoList.appendChild(repoItem);
    });
   
}
    getRepos("ayates89", ["summer-chores", "responsive-contact-card", "the-quote-card-express"]);
 
