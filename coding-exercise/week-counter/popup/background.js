console.log("fuck fuck")

function handMessage(request,sender,sendResponse){
    console.log(request);
    if(request.type=="increaseCounter"){
        counter++;
        chrime.storage.local.set({counter})
    }else if(request.type=="getCount"){
        sendResponse(counter)
    }
}
chrome.runtime.onMessage.addListener(handleMessage);