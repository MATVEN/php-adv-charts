function chartPrint(targetId, chartType, labels, data) {

  var ctx = $('#' + targetId);
  new Chart(ctx, {

      type: chartType,
      data: {
          labels:labels,
          datasets: [{
              label: 'Vendite',
              data: data
          }]
      }
  });
}

function chartPrintLine(data) {

  chartPrint('myChartLine', 'line', moment.monthsShort(), data['data']);

}

function chartPrintPie(data) {

  var agents = Object.key(data['data');
  var revenue = Object.values(data['data');

  chartPrint('myChartPie', 'pie', agents, revenue);

}

  $(document).ready(function () {

    $.ajax({
      url: "getLineData.php",
      method: "GET",
      success: function(data) {

          chartPrintLine(data['fatturato']);
          chartPrintPie(data['fatturato_by_agent']);

      },
      error: function(error) {
        console.log("error", error);
      }
    });

  })
