$(document).ready(function () {
    $("#sidebarToggle").click(function () {
        $("#sidebar").toggleClass("collapsed");
        $("#content").toggleClass("collapsed");

        //
        


        //
        if ($("#sidebar").hasClass("collapsed")) {
            $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
        } else {

            $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
        }
    });
    let search = document.querySelector("input[name=searchByName]");
    search.addEventListener("input", searching);

    function searching(e) {
        //  console.log(e);
        let tr = document.querySelectorAll("tbody tr");
        for (let i = 0; i < tr.length; i++) {
            let node = tr[i];
            let textContent = node.children[2].textContent.toLowerCase();
            let show = textContent.indexOf(this.value.toLowerCase()) !== -1;
            node.style.display = show ? "" : "none";
        }
    }
    $(window).resize(function () {
        updateSidebarState();
    });

}); //load event

function updateSidebarState() {
    if ($(window).width() <= 1200) {

        $("#sidebar").addClass("collapsed");
        $("#content").addClass("collapsed");

        $(".nav-link .fa").removeClass("fa-bars").addClass("fa-table-cells-large");
    } else {

        $("#sidebar").removeClass("collapsed");
        $("#content").removeClass("collapsed");

        $(".nav-link .fa").removeClass("fa-table-cells-large").addClass("fa-bars");
    }
}

///////////////////////////////////////////////////////////////////////






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
  


  /* seconed chart*/
  var ctx2 = document.getElementById('myChart3').getContext('2d');

  new Chart(ctx2, {
    type: 'pie',
    data: {
      labels: ['Category 1', 'Category 2', 'Category 3'],
      datasets: [{
        data: [30, 40, 30],
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56'],
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Basic Pie Chart'
      }
    }
  });

  /* third chart*/
  var ctx3 = document.getElementById('myChart4').getContext('2d');

  // Dummy data for each month
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var data = [30, 40, 25, 50, 20, 45, 35, 60, 30, 55, 40, 50];

  new Chart(ctx3, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'monthly sales',
        data: data,
        borderColor: 'blue',
        borderWidth: 2,
        fill: false
      }]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      title: {
        display: true,
        text: 'Line Chart for Months'
      },
      scales: {
        x: {
          title: {
            display: true,
            text: 'Months'
          },
          grid:{
            display:false
          }
        },
        y: {
          title: {
            display: true,
            text: 'Data'
          },
          grid:{
            display:false
          }
        }
      }
    }
  });