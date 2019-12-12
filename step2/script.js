function chartPrintLine(data) {

  var ctx = document.getElementById('myChartLine').getContext('2d');
  new Chart(ctx, {

      type: 'line',
      data: {
          labels: moment.monthsShort(),
          datasets: [{
              label: 'Vendite',
              data: data
          }]
      }
  });
}

function chartPrintPie(data) {

  var ctx = document.getElementById('myChartPie').getContext('2d');
  new Chart(ctx, {

      type: 'pie',
      data: {
          labels: label,
          datasets: [{
              label: 'Agents',
              data: data
          }]
      }
  });
}


  $(document).ready(function () {

    $.ajax({
      url: "getLineData.php",
      method: "GET",
      success: function(data) {

          chartPrintLine(data);

      },
      error: function(error) {
        console.log("error", error);
      }
    });

  })

  $(document).ready(function () {

    $.ajax({
      url: "getLineData.php",
      method: "GET",
      success: function(data) {

          chartPrintPie(data);

      },
      error: function(error) {
        console.log("error", error);
      }
    });

  })
