const inputStart = document.getElementById('start-number');
const inputEnd = document.getElementById('end-number');
const submitBtn = document.getElementById('submit');
const result = document.querySelector('.result');

submitBtn.addEventListener('click',function(event){
    let start = Number(inputStart.value);
    let end = Number(inputEnd.value);
    event.preventDefault();
    result.innerHTML = "";
    generateTable(start,end);
})

function generateTable(start,end){
    for(let i=start; i<=end; i++){
        const table = document.createElement('div');
        table.classList.add('table');
        const heading = document.createElement('span');
        heading.classList.add('table-heading');
        heading.innerText = `${i}`;
        table.appendChild(heading);
        for(let j=1; j<=10; j++){
            const tableData = document.createElement('span');
            tableData.classList.add('table-data');
            tableData.innerText = i*j;
            table.appendChild(tableData);
        }
        result.appendChild(table);
    }
}

result.addEventListener('click',function(event){
    const clickedValue = Number(event.target.innerText);
    const allValues = document.querySelectorAll('.table-data');
    allValues.forEach((value)=>{
        value.style.backgroundColor = '#f9f9f9';
        if(Number(value.innerText)%(clickedValue) === 0){
            value.style.backgroundColor = '#ffc107';
        }
    })
})