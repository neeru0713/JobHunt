let companyName;
let numOfEmp;
let count = 0;
let diff;

chrome.runtime.onMessage.addListener((msg, sender, response) => {
    companyName = msg.company;
    numOfEmp = msg.numEmp;
    jobhuntStart()
});

async function sleep(time){
    return new Promise((resolve) => setTimeout(resolve, time))
}

async function jobhuntStart() {

    await searchCompanyName()
    await sleep(4000)
    await clickPeoplePill()
    await sleep(4000)
    let connectButtons = await getConnectButtons()
    await sleep(1500)
    await clickElements(connectButtons);
    await sleep(1000)
    alert("Thank you")

}

async function clickElements(connectButtons) {
    for (let i = 0; i < connectButtons.length; i++) {
        console.log("inside loop : ", diff)
        diff = numOfEmp - count;
        if(diff > 0){
            await sleep(1000);
            console.log(`clicking on ${i}th button`)
            console.log(connectButtons[i])
            await connectButtons[i].click();
            await sleep(500);
            const buttons = document.querySelectorAll('.artdeco-modal .artdeco-button .artdeco-button__text');
            if (buttons.length >= 3) {
                await buttons[2].click();
                count++;
            }
        }
    }
    diff = numOfEmp - count;
    console.log("after : ", diff)
    if(diff > 0){
        await sleep(1000)
        // Scroll to the bottom of the page
        var element = document.querySelector('footer'); // You can change this to target a specific element if needed
        element.scrollIntoView({ behavior: 'smooth', block: 'end' });
        await sleep(1500)

        var nextBtn = document.getElementsByClassName('artdeco-pagination__button--next');
        console.log(nextBtn[0])
        await nextBtn[0].click()
        await sleep(3000)
        let connectButtons = await getConnectButtons()
        await clickElements(connectButtons);
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
    await peoplePill.click();
}

async function getConnectButtons(){
    let locators = document.querySelectorAll(".entity-result__item .artdeco-button .artdeco-button__text");
    // convert dom object to array    
    let arr = [...locators];

    arr = arr.filter((loc)=>{
        return loc.innerText === 'Connect';
    });
    return arr;
}




