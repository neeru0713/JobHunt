let company;
let num;
document.addEventListener("DOMContentLoaded", function (){
    company = document.querySelector('#companyName')
    num = document.querySelector('#numEmp')
    document.querySelector('.btn').addEventListener('click', popup)
})

async function popup(){
    let tabs = await chrome.tabs.query({currentWindow: true, active: true})
    await chrome.tabs.sendMessage(tabs[0].id, {
        company: company.value,
        numEmp: num.value
    });
}


