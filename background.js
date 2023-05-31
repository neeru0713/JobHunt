
  // chrome.tabs.onUpdated.addListener((tabId, tab) => {
  //   if(tab.url && tab.url.includes("linkedin.com")){
  //     console.log(tab.url)
  //     chrome.tabs.executeScript(tabId, {file: "contentScript.js"});
  //   }
  // })

// console.log("background")
// chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  
//     if (tab.url && tab.url.includes("linkedin.com") && changeInfo.status === 'complete') {
      
//     }
//   });
  
  



  // chrome.tabs.onUpdated.addListener((tabId, tab) => {
  //   if (tab.url && tab.url.includes("linkedin.com")) {
  //     chrome.tabs.sendMessage(tabId, {
  //       type: "NEW"
  //     });
  //   }
  // });