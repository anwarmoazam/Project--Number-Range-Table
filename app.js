const inputStart = document.getElementById('start-number');
const inputEnd = document.getElementById('end-number');
const submitBtn = document.getElementById('submit');
const result = document.querySelector('.result');

submitBtn.addEventListener('click',function(event){
    let start = Number(inputStart.value);
    let end = Number(inputEnd.value);
    event.preventDefault();
    console.log('button clicked');
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
        console.log(`Table of ${i}`)
        for(let j=1; j<=10; j++){
            const tableData = document.createElement('span');
            tableData.classList.add('table-data');
            // tableData.innerText = `${i*j < 10 ? '0' + i*j : i*j}`;
            tableData.innerText = i*j;
            table.appendChild(tableData);
            console.log(i*j);
        }
        result.appendChild(table);
    }
}

result.addEventListener('click',function(event){
    console.log(event.target);
    const clickedValue = Number(event.target.innerText);
    const allValues = document.querySelectorAll('.table-data');
    console.log(clickedValue);
    allValues.forEach((value)=>{
        // console.log(value);
        value.style.backgroundColor = '#f9f9f9';
        if(Number(value.innerText)%(clickedValue) === 0){
            console.log('if block',value);
            value.style.backgroundColor = '#ffc107';
        } else{
            console.log('else block')
        }
    })
})