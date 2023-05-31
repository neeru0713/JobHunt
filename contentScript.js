let companyName;
let numOfEmp;
let count = 0;
chrome.runtime.onMessage.addListener((msg, sender, response) => {
    companyName = msg.company;
    numOfEmp = msg.numEmp;
    jobhuntStart()
});


async function jobhuntStart() {

    await searchCompanyName()
    // await clickPeoplePill()

    // let connectButtons = await getConnectButtons()
    // await clickElements(connectButtons);
    
    // let diff = numOfPeople - count;

}


async function clickElements(connectButtons) {
    for (let i = 0; i < connectButtons.length; i++) {
        await new Promise((resolve) => setTimeout(resolve, i * 1000));
        console.log(`clicking on ${i}th button`)
        connectButtons[i].click();
        await new Promise((resolve) => setTimeout(resolve, 500));
        const buttons = document.querySelectorAll('.artdeco-modal .artdeco-button .artdeco-button__text');
        if (buttons.length >= 3) {
        buttons[2].click();
        count++;
        }
    }
}

async function searchCompanyName(){
    
    let inputBox = document.querySelector('.search-global-typeahead__input')
    inputBox.click()
    inputBox.value = companyName
    // Create a new "Enter" key press event
    const eve = new KeyboardEvent("keydown", {
        key: "Enter",
        code: "Enter",
        keyCode: 13,
        which: 13,
        bubbles: true,
        cancelable: true
    });

    // Dispatch the event on the input element
    inputBox.dispatchEvent(eve);
}

async function clickPeoplePill(){
    let peoplePill = document.querySelector('li.search-reusables__primary-filter:nth-child(1) button')
    peoplePill.click();
}

async function getConnectButtons(){
    let locators = document.querySelectorAll(".entity-result__item .artdeco-button .artdeco-button__text");
    let arr = [...locators];

    arr = arr.filter((loc)=>{
        return loc.innerText === 'Connect';
    });
    return arr;
}




