/* Following "The Coding Train" YouTube tutorial series Working With Data & APIs in JavScript
The following function importData retrieves a csv and splits it into rows by linebreak and then 
into columns by comma
*/

async function importData() {
    const response = await fetch("assets/images/example.csv");
    const data = await response.text();
    
    const rows = data.split('\n');
    for (row of rows){
        const columns = row.split(',');
        console.log(columns);
    }
}

importData()
.catch(error => {
            console.log('error!');
            console.error(error);
});
