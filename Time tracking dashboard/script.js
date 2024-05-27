document.addEventListener("DOMContentLoaded", () => {
    // Simulated real-time data fetch function
    function fetchRealTimeData() {
      // Simulate fetching updated data
      return {
        "Work": {
          "daily": { "current": Math.floor(Math.random() * 10), "previous": Math.floor(Math.random() * 10) },
          "weekly": { "current": Math.floor(Math.random() * 40), "previous": Math.floor(Math.random() * 40) },
          "monthly": { "current": Math.floor(Math.random() * 160), "previous": Math.floor(Math.random() * 160) }
        },
        "Play": {
          "daily": { "current": Math.floor(Math.random() * 10), "previous": Math.floor(Math.random() * 10) },
          "weekly": { "current": Math.floor(Math.random() * 40), "previous": Math.floor(Math.random() * 40) },
          "monthly": { "current": Math.floor(Math.random() * 160), "previous": Math.floor(Math.random() * 160) }
        },
        "Study": {
          "daily": { "current": Math.floor(Math.random() * 10), "previous": Math.floor(Math.random() * 10) },
          "weekly": { "current": Math.floor(Math.random() * 40), "previous": Math.floor(Math.random() * 40) },
          "monthly": { "current": Math.floor(Math.random() * 160), "previous": Math.floor(Math.random() * 160) }
        },
        "Exercise": {
          "daily": { "current": Math.floor(Math.random() * 10), "previous": Math.floor(Math.random() * 10) },
          "weekly": { "current": Math.floor(Math.random() * 40), "previous": Math.floor(Math.random() * 40) },
          "monthly": { "current": Math.floor(Math.random() * 160), "previous": Math.floor(Math.random() * 160) }
        },
        "Social": {
          "daily": { "current": Math.floor(Math.random() * 10), "previous": Math.floor(Math.random() * 10) },
          "weekly": { "current": Math.floor(Math.random() * 40), "previous": Math.floor(Math.random() * 40) },
          "monthly": { "current": Math.floor(Math.random() * 160), "previous": Math.floor(Math.random() * 160) }
        },
        "Self Care": {
          "daily": { "current": Math.floor(Math.random() * 10), "previous": Math.floor(Math.random() * 10) },
          "weekly": { "current": Math.floor(Math.random() * 40), "previous": Math.floor(Math.random() * 40) },
          "monthly": { "current": Math.floor(Math.random() * 160), "previous": Math.floor(Math.random() * 160) }
        }
      };
    }
  
    const buttons = document.querySelectorAll(".btn[data-period]");
    const timecards = document.querySelectorAll(".timecard");
  
    function updateTimecards(period) {
      const timeframes = fetchRealTimeData();
  
      timecards.forEach(timecard => {
        const title = timecard.querySelector(".timecard--title h2").textContent.trim();
        const current = timeframes[title][period].current;
        const previous = timeframes[title][period].previous;
        const previousPeriod = period === "daily" ? "Yesterday" : period === "weekly" ? "Last Week" : "Last Month";
  
        timecard.querySelector(".current").textContent = `${current}hrs`;
        timecard.querySelector(".previous").textContent = `${previousPeriod} • ${previous}hrs`;
      });
    }
  
    buttons.forEach(button => {
      button.addEventListener("click", (e) => {
        const period = e.target.getAttribute("data-period");
  
        // Remove active class from all buttons
        buttons.forEach(btn => btn.classList.remove("active"));
  
        // Add active class to the clicked button
        e.target.classList.add("active");
  
        // Update timecards
        updateTimecards(period);
      });
    });
  
    // Initial update
    const activeButton = document.querySelector(".btn.active");
    if (activeButton) {
      const initialPeriod = activeButton.getAttribute("data-period");
      updateTimecards(initialPeriod);
    }
  
    // Update data every 5 seconds to simulate real-time updates
    setInterval(() => {
      const activeButton = document.querySelector(".btn.active");
      if (activeButton) {
        const activePeriod = activeButton.getAttribute("data-period");
        updateTimecards(activePeriod);
      }
    }, 5000);
  
    // Interactive buttons inside each timecard
    const interactiveButtons = document.querySelectorAll(".timecard .btn[aria-label='interactive button']");
    interactiveButtons.forEach(btn => {
      btn.addEventListener("click", (e) => {
        const timecard = e.target.closest('.timecard');
        const title = timecard.querySelector('.timecard--title h2').textContent.trim();
        // Simulate an action when the interactive button is clicked
        console.log(`Interactive button clicked for ${title}`);
      });
    });
  });
  