const currentDayOfTheWeek = document.querySelector('[data-testid="currentDayOfTheWeek"]');
const currentUTCTime = document.querySelector('[data-testid="currentUTCTime"]');
const slackUserNameElement = document.querySelector('[data-testid="slackUserName"]');

const githubURLElement = document.querySelector('[data-testid="githubURL"]');

function updateDay(){
    const now = new Date();
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const currentDayOfWeek = daysOfWeek[now.getUTCDay()];
    currentDayOfTheWeek.textContent = currentDayOfWeek
}


    function updateTime(){  
        const now = new Date();
        const hours = now.getUTCHours();
        const minutes = now.getUTCMinutes();
        const seconds = now.getUTCSeconds();
        const formattedHours = hours < 10 ? `0${hours}` : hours;
        const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;
        const formattedSeconds = seconds < 10 ? `0${seconds}` : seconds;
      
        currentUTCTime.textContent = `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
      }




      function openGitHubLink() {
        const githubRepoURL = "https://github.com/pedroolayemi/bigpedrohngfirsttask.git";
        window.open(githubRepoURL, "_blank");
    }

    githubURLElement.addEventListener("click", openGitHubLink);

updateTime();
updateDay();


    setInterval(updateTime, 1000);
    //   console.log(currentTime);
      
    //   console.log(currentDay);
      
      
