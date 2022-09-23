class Layout {
    constructor(principle, organization, link, image, description) {
        this.principle = principle;
        this.organization = organization;
        this.link = link;
        this.image = image;
        this.description = description;

    }
}



function create_card(layout) {
    const base = `
    <section>

            <h3 class="subtitle">${layout.principle}</h3>
            <p>${layout.organization}</p>
            <a href="${layout.link}">${layout.link}</a>
            <img src="./images/${layout.image}" alt="screenshot-${layout.organization}"/>
            <p>${layout.description}</p>
            
    </section>
    
    `;
    return base;
}

//Data
let layout1 = new Layout();

layout1.principle = "Visual Hierarchy";
layout1.organization = "Apple";
layout1.link = "https://www.apple.com/la/";
layout1.image = "screenshot_apple_mobile.png";
layout1.description = "Visual hierarchy is the principle of arranging elements to show their order of importance. Designers structure visual characteristics—e.g., menu icons—so users can understand information easily. By laying out elements logically and strategically, designers influence users’ perceptions and guide them to desired actions.";


let layout2 = new Layout();

layout2.principle = "Alignment";
layout2.organization = "DHL";
layout2.link = "https://www.dhl.com/bo-es/home.html";
layout2.image = "screenshot_dhl_mobile.png";
layout2.description = "Alignment allows an observer to read the image more easily and clearly. This is achieved by aligning objects to establish order and avoid haphazardly positioning items in the image.";


let layout3 = new Layout();

layout3.principle = "Hick's Law";
layout3.organization = "Adidas";
layout3.link = "https://www.adidas.com/us";
layout3.image = "screenshot_adidas_mobile.png";
layout3.description = 'The more options an user have to do, the less time he will stay in the website. Good designers try to respect the user\'s time and in this way improve the user\'s experience. "Users bombarded with choices have to take time to interpret and decide, giving them work they don’t want."';



const main = document.getElementById("main");

let content = [layout1, layout2, layout3]; 

//console.log(content);

for (i in content){
    //console.log(content[i]);
    let a = create_card(content[i]);
    //console.log(a);
    main.innerHTML += a;
}

// Select the HTML element to manipulate
const date = document.querySelector("#date");
// Try to complete the method with options

	const options = {
		day: "numeric",
		month: "numeric",
		year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric"
	};
	date.textContent = new Date().toLocaleDateString("en-UK", options);
