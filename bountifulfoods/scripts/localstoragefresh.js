// initialize display elements


document.getElementById('btnSubmit').addEventListener('click', ()=>{

    // get the stored value in localStorage
    let drinksSubmited = Number(window.localStorage.getItem("drinksSubmited"));

    // determine if this is the first visit or display the number of visits.
    if (drinksSubmited !== 0) {
        
        drinksSubmited++;

        localStorage.setItem("drinksSubmited", drinksSubmited);

        
    } else {
        localStorage.setItem("drinksSubmited",  1);
    }
});







