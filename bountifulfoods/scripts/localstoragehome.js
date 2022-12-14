// initialize display elements


    const drinks_user = document.querySelector("#drinks-made-div");

    const drinksSubmitedDisplay = document.createElement("h2");
    // get the stored value in localStorage
    let drinksSubmited = Number(window.localStorage.getItem("drinksSubmited"));

    // determine if this is the first visit or display the number of visits.
    if (drinksSubmited !== 0) {
        
        
        drinksSubmitedDisplay.textContent = drinksSubmited;
        
        drinks_user.appendChild(drinksSubmitedDisplay);
        
    } else {
        drinksSubmitedDisplay.textContent = `There are not drinks made.`;
        drinks_user.appendChild(drinksSubmitedDisplay);
    }










