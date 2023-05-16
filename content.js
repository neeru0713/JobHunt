

let companyName = "Intuit"
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

setTimeout(()=>{
    let peoplePill = document.querySelector('li.search-reusables__primary-filter:nth-child(1) button')
    peoplePill.click();
}, 2000)


let locators = document.querySelectorAll(".entity-result__item .artdeco-button .artdeco-button__text");
let arr = [...locators];

arr = arr.filter((loc)=>{
    return loc.innerText === 'Connect';
});

for(let i=0; i<arr.length; i++){
    setTimeout(() => {
        arr[i].click();
        setTimeout(() => {
            const buttons = document.querySelectorAll('.artdeco-modal .artdeco-button .artdeco-button__text');
            if (buttons.length >= 3) {
                buttons[2].click();
            }
        }, 500);
    }, i * 1000);
}

function sendRequest(num, company){

}
