/*Create two functions : launchBrowser, runTests where,
a) launchBrowser need to take input as browserName (string) and do not return any
- use if-else (chrome or otherwise)
- Print the value
b) runTests need to take input as testType (string) and do not return any
- use switch case (smoke, sanity, regression, default (smoke))
- Print the values
Call that function from the javascript */



function launchBrowser(browser) 
{
    if (browser == "Chrome")
    {
        console.log("Chrome browser launched successfully");
    }   
    else {
        console.log("browser launched successfully");
    }
}
function runtests(testtype)
{
    switch(testtype)
    {
        case "smoke":
            console.log("Smoke tests executed successfully");
            break;
        case "regression":
            console.log("Regression tests executed successfully");
            break;
        case "sanity":
            console.log("Sanity tests executed successfully");
            break;
        default:
            console.log("Smoke tests executed successfully");

    }
}

launchBrowser("Chrome");
runtests("smoke");