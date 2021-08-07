google.charts.load('current', {packages: ['corechart', 'line']});
google.charts.setOnLoadCallback(drawChart);


/* Following "The Coding Train" YouTube tutorial series Working With Data & APIs in JavScript
The following function importData retrieves a csv and splits it into rows by linebreak and then 
into columns by comma
*/

async function importData() {
    const response = await fetch("assets/images/example.csv");
    const data = await response.text();
    
    const rows = data.split('\n');
    const headings = rows[0].split(',');

    for (row of rows){
       const columns = parseFloat(row.split(','));
      
    }
    
}

// .catch(error => {
//             console.log('error!');
//             console.error(error);
// });


  // Callback that creates and populates a data table,
  // instantiates the pie chart, passes in the data and
  // draws it.
  function drawChart() {
    importData()
    // Create the data table.
    var data = new google.visualization.DataTable();  
    data.addColumn();
    data.addRows();

    // Set chart options
    var options = {'title':'How Much Pizza I Ate Last Night',
                   'width':400,
                   'height':300};

    // Instantiate and draw our chart, passing in some options.
    var chart = new google.charts.Line(document.getElementById('chart_div'));
      chart.draw(data, google.charts.Line.convertOptions(options));
  }

