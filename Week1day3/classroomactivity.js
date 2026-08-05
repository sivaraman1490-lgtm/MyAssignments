const browserVersion ='Chrome';
function getBrowserVersion(){
    if (browserVersion === 'Chrome'){
        let browserVersion = 'Chrome 114';
        console.log('Inside if block:',browserVersion);
    }
    console.log('Outside if block:',browserVersion);
}

getBrowserVersion();