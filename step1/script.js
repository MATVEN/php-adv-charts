function chartPrint(data) {

  var ctx = document.getElementById('myChart').getContext('2d');
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

  $(document).ready(function () {

    $.ajax({
      url: "getLineData.php",
      method: "GET",
      success: function(data) {

          chartPrint(data);

      },
      error: function(error) {
        console.log("error", error);
      }
    });

  })
