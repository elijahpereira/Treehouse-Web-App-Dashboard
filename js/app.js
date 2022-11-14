/*********************************
 * CHARTS                        * 
 *********************************/

const dailyTrafficCanvas = document.getElementById('daily-traffic-chart').getContext('2d');

let dailyTrafficData = {
  labels: ["16-22", "23-29", "30-5", "6-12", "13-19", "20-26", "27-3",
    "4-10", "11-17", "18-24", "25-31"
  ],
  datasets: [{
    data: [750, 1250, 1000, 2000, 1500, 1750, 1250, 1850, 2250, 1500,
      2500
    ],
    backgroundColor: 'rgba(116, 119, 191, .3)',
    borderWidth: 1,
  }]
};

let dailyTrafficOptions = {
  backgroundColor: 'rgba(112, 104, 201, .5)',
  fill: true,
  aspectRatio: 2.5,
  animation: {
    duration: 0
  },
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

let dailyTrafficChart = new Chart(dailyTrafficCanvas, {
  type: 'line',
  data: dailyTrafficData,
  options: dailyTrafficOptions
});




const barCanvas = document.getElementById("bar-chart");

const barData = {
  labels: ["S", "M", "T", "W", "T", "F", "S"],
  datasets: [{
    label: '# of Hits',
    data: [75, 115, 175, 125, 225, 200, 100],
    backgroundColor: '#7477BF',
    borderWidth: 1
  }]
};
const barOptions = {
  scales: {
    y: {
      beginAtZero: true
    }
  },
  plugins: {
    legend: {
      display: false
    }
  }
};

let barChart = new Chart(barCanvas, {
  type: 'bar',
  data: barData,
  options: barOptions
});

const donutCanvas = document.getElementById("donut-chart");

const donutData = {
  labels: ["Desktop", "Tablet", "Phones"],
  datasets: [{
    label: '# of Users',
    data: [2000, 550, 500],
    borderWidth: 0,
    backgroundColor: [
      '#7477BF',
      '#78CF82',
      '#51B6C8'
    ]
  }]
};

const donutOptions = {
  aspectRatio: 1.9,
  plugins: {
    legend: {
      position: 'right',
      labels: {
        boxWidth: 20,
        fontStyle: 'bold'
      }
    }
  }
};

let donutChart = new Chart(donutCanvas, {
  type: 'doughnut',
  data: donutData,
  options: donutOptions
});

//Close Alert Banner
    const alertBanner = document.getElementsByClassName("alert-container")[0];

    alertBanner.addEventListener('click', e => {
      const element = e.target;
      if (element.classList.contains("alert-close")) {
        alertBanner.style.display = "none"
      }
    });

//Message Field Restriction with Empty Fields
    const user = document.querySelector(".msg.Search");
    const message = document.querySelector(".msg.Content");
    const send = document.querySelector(".sendMSG");

    send.addEventListener('click', () => {
      // ensure user and message fields are filled out
      if (user.value === "" && message.value === "") {
        alert("Please fill out user and message fields before sending");
      } else if (user.value === "") {
        alert("Please fill out user field before sending");
      } else if (message.value === "") {
        alert("Please fill out message field before sending");
      } else {
        alert(`Message successfully sent to: ${user.value}`);
      }
    });

//Notifications

  const notifs=document.getElementsByClassName("bell-container")[0];
  notifs.addEventListener('click', () => {
    alert("You Have no new Notifications");
  })
//Change Traffic Time Focus
    document.addEventListener("click", function handleClick(event) {
      const element= event.target;
      //Attempt to remove "active" class from li before adding it to new element
        if(element.classList.contains("traffic-nav-link")){
          const target = document.getElementsByClassName("active")[0];
          console.log(target);
          target.classList.remove("active");
          console.log(target);
          // target.classList.remove("active");
        event.target.classList.add("active");
        }
    });
