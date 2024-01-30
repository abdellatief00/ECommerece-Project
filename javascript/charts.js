// import {getTotalOrdersQuantities, getOrderTotalPrice} from "./sellerDashboard"; 
const ctx = document.getElementById('myChart2');
new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ['prod1', 'prod2', 'prod3', 'prod4', 'prod5', 'prod6'],
      datasets: [{
        label: 'item sold',
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: '#FE7A36',
        borderWidth: 1
      }]
    },
    options: {
      plugins: {
        legend: {
          display: true,
        },
        title: {
          display: true,
          text: 'Sales Chart'
        }
      },
      scales: {
        x: {
          grid: {
            display: false // Set display to false to remove the x-axis grid
          }
        },
        y: {
          grid: {
            display: false // Set display to false to remove the y-axis grid
          },
          beginAtZero: true,
        }
      }
    }
  });

  /* third chart*/
  var ctx3 = document.getElementById('myChart4').getContext('2d');

  // Dummy data for each month
  var dates = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var data = [30, 40, 25, 50, 20, 45, 35, 60, 30, 55, 40, 50];
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
      display: true,
      text: 'Wavy Line Chart with Chart.js'
    },
    legend: {
      display: false
    },
    tooltips: {
      enabled: true,
      mode: 'index',
      intersect: false
    },
    axes: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    },
    hover: {
      mode: 'nearest',
      intersect: true
    }
  };

  
  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: dates,
      datasets: [{
        label: 'order quantities',
        data: data,
        borderColor: 'red',
        borderWidth: 2,
        fill: false,
        pointRadius: 1,
          cubicInterpolationMode: "monotone",
      },
      {
        label: 'orders revenue',
        data: data,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false,
        pointRadius: 1,
          cubicInterpolationMode: "monotone",
      }
    ]
    },
    

    options: options
  });