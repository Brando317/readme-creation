let watchTurorialCallback = new promise (callback, errorCallback) {
    let userLeft = false;
    let userWatchingLiveStream = true;
if (userWatchingLiveStream) {
    resolve ("ThumbsUp and "subscribe!")
}
else {
 reject ("userLeft")
}
    
}
}   
watchTurorialCallback.then((message) => {
    console.log("This is in then: "+message");}
}}
.catch