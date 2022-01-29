
$('#start').on('click', getCategoryIds)
const $tableBod = $('#bodyodyodyodoy');

async function getCategoryIds() {
    $('#start').css('display', 'none');

    const response = await axios.get('https://jservice.io/api/categories', { params: { count: 100 }})
    
    const startingCat = Math.floor(Math.random()*100);
    const results = response.data;
    const headArr =[];
    for(let i=startingCat; i <= startingCat + 5; i++) {
        headArr.push(results[i]);
    }
    
    getCategory(headArr);
}

async function getCategory(catId) {
    const categories = await catId;
    
    let idArr = [];
    for (let each of categories) {
        idArr.push(each.id);
    }
    
    for (let cat of categories) {
        let $headerCell = $(`<th scope="col">${cat.title}</th>`);
        $('#headerRow').append($headerCell);
    }
    
    fillTable(idArr);
}

async function fillTable (categories) {
    
    let cluesArr = [];
    let questions = [];
    for(let each of categories) {
        let response = await axios.get(`https://jservice.io/api/clues?category=${each}`)
        let clues = response.data;
        if (clues.length > 5) {
            let short = clues.slice(0,5)
            cluesArr.push(short);
        } else cluesArr.push(clues);
    } 

    for(let i = 0; i < 5; i++) {
        let $row = $(`<tr id="row-${i}"></tr>`);
        console.log($row);
        for (let x = 0; x <= 5; x++) {
            let { value, question, answer } = cluesArr[x][i];
            if (!value) {
                value = 'no points!';
            }
            let $money = $(`<td id="${i}-${x}">${value}</td>`);
            questions.push({question, answer})
            $row.append($money);
        }
        $tableBod.append($row);
    }
    
    return questions;
}

function handleClick(evt) {
}
