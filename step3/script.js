function chartPrint(targetId, chartType, labels, data) {
console.log(chartType);
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

  chartPrint('chart-line', 'line', moment.monthsShort(), data['data']);

}

function chartPrintPie(data) {

  var agents = Object.keys(data['data']);
  var revenue = Object.values(data['data']);

  chartPrint('chart-pie', 'pie', agents, revenue);

}

function chartTeamEfficiency(data) {

  var team = Object.keys(data['data']);
  var dataTeam = Object.values(data['data']);

  var ctx = $('#chart-team');
  var mixedChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels:moment.monthsShort(),
        datasets: [{
            label:team[0],
            data:dataTeam[0],
        }, {
            label:team[1],
            data: dataTeam[1],
        }, {
            label:team[2],
            data:dataTeam[2],
        }],
    },
});

}

  $(document).ready(function (access) {

    $.ajax({
      url: "getLineData.php",
      method: "GET",
      data: {
        level:access
      }
      success: function(data) {

      console.log(data['team_efficiency']);
          chartPrintLine(data['fatturato']);
          chartPrintPie(data['fatturato_by_agent']);
          chartTeamEfficiency(data['team_efficiency']);
      },
      error: function(error) {
        console.log("error", error);
      }
    });

  })
