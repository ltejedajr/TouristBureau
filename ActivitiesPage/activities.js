"use strict";

let categories = ["Adventures", "Arts & Crafts", "Museums", "Wine Tastings", "Other"];

let activities = [
   {
        category: "Adventures", 
        id: "A101", 
        name: "Valley Hot Air Balloons", 
        description: "Enjoy a lovely hot air balloon ride over the valley at sunrise.  Call 800-555-1212 to reserve a date/time after you complete your e-ticket purchase.", 
        location: "121 S. Main Street",
        price: 265.00 
   },
   {
        category: "Adventures", 
        id: "A102", 
        name: "River Runners: Float Trip", 
        description: "A mellow float trip with lovely scenery, great fishing, just a few riffles, and it finishes back at our base. It is a perfect trip for those wishing to take their time, or those on a limited schedule.", 
        location: "145 FM 103",
        price: 65.00 
    },
    {
        category: "Adventures", 
        id: "A103", 
        name: "River Runners: Ride the Rapids", 
        description: "Experience 3-4 hours of Class II and III whitewater rafting with breathtaking scenery. It is a fun, thrilling, and memorable adventure that everyone from ages 8 and up can enjoy – no experience necessary!", 
        location: "145 FM 103",
        price: 145.00 
    },     
    {
        category: "Arts & Crafts", 
        id: "AC101", 
        name: "Painting with a Twist : Oils", 
        description: "Enjoy 2 hours of creating an oil painting by following along with an experienced artist.  Drinks and snacks are included.", 
        location: "1991 Paint Drive",
        price: 40.00 
    },
    {
        category: "Arts & Crafts", 
        id: "AC102", 
        name: "Painting with a Twist : Watercolor", 
        description: "Enjoy 2 hours of creating a watercolor painting by following along with an experienced artist.  Drinks and snacks are included.", 
        location: "1991 Paint Drive",
        price: 40.00 
    },   
    {
        category: "Museums", 
        id: "M101", 
        name: "Bravings Airship Museum", 
        description: "Enjoy climbing on and in our collection of small airplanes.  You will find bi-planes, experimental planes and small jets.", 
        location: "101 Airfield Drive",
        price: 10.00
    },   
    {
        category: "Museums", 
        id: "M102", 
        name: "Forks and Spoons Museum", 
        description: "Enjoy touring our qwerky Forks and Spoons Museum.  It houses the worlds largest collection of, you guessed it, forks and spoons!", 
        location: "1056 Lost Knives Court",
        price: 3.00
    },  
    {
        category: "Museums", 
        id: "M103", 
        name: "Steenges Computing Museum", 
        description: "Enjoy our the Stengees Computing Museum that illustrates how computing has changed over the last 60 years.", 
        location: "103 Technology Way",
        price: 0.00 
    },  
    {
        category: "Wine Tastings", 
        id: "WT-101", 
        name: "Hastings Winery Tours and Tastings", 
        description: "Hastings Winery is a small, family owned winery in the heart of San Jose, CA. We pride ourselves on producing single vineyard, small-batch, handcrafted premium wines sourced from the finest grapes in our valley.", 
        location: "10987 FM 1187",
        price: 12.00 
    },   
    {
        category: "Wine Tastings", 
        id: "WT-102", 
        name: "Lone Oak Winery", 
        description: "We are a family and friend centered winery that thrives to make each of our guests feel right at home. With a growing wine list of the finest local wines, we offer tours and an incredible experience. We are open for to-go, curbside, and delivery.", 
        location: "121 Burleson Court",
        price: 0.00 
    },   
    {
        category: "Other", 
        id: "OTH101", 
        name: "Fire Department: Ride Along", 
        description: "Spend the day hanging out at one of our local fire stations, visiting with the staff and learning about their jobs.  If they receive a call, you can ride along with them!", 
        location: "10 Redline Drive",
        price: 25.00 
    },   
    {
        category: "Other", 
        id: "OTH102", 
        name: "Homes For Our Neighbors", 
        description: "Yes, you are a visitor!  But what better way to learn about a community than volunteer with the locals to build affordable housing.  Whether it be for an hour or a week, we would love to have you with us!", 
        location: "Call (555) 555-5555",
        price: 0.00 
    }
];

window.onload = function () {
    const categoryDropdown = document.getElementById("categoryDropdown");
    const activityDropdown = document.getElementById("activityDropdown");
    const activityDetails = document.getElementById("activityDetails");
    const activityId = document.getElementById("activityId");
    const activityName = document.getElementById("activityName");
    const activityDescription = document.getElementById("activityDescription");
    const activityLocation = document.getElementById("activityLocation");
    const activityPrice = document.getElementById("activityPrice");
    const purchaseForm = document.getElementById("purchaseForm");
    const ticketForm = document.getElementById("ticketForm");
    const purchaseMessage = document.getElementById("purchaseMessage");

function populateCategoriesDropdown(dropdown, data) {
    dropdown.innerHTML = '<option value="" selected>Select one</option>';
    for (const item of data) {
        const option = document.createElement("option");
        option.value = item;
        option.innerText = item;
        dropdown.appendChild(option);
    }
}

function populateActivityDropdown(category) {
    activityDropdown.innerHTML = '<option value="" selected>Select one</option>';
    for (const activity of activities) {
        if (activity.category == category) {
            const option = document.createElement("option");
            option.value = activity.id;
            option.innerText = activity.name;
            activityDropdown.appendChild(option);
        }
    }
}

categoryDropdown.onchange = function () {
    const selectedCategory = categoryDropdown.value;
    if (selectedCategory) {
        populateActivityDropdown(selectedCategory);
        activityDetails.style.display = "none";
        purchaseForm.style.display = "none";
    }
};

activityDropdown.onchange = function () {
    const selectedActivityId = activityDropdown.value;
    if (selectedActivityId) {
        const selectedActivity = activities.find(activity => activity.id == selectedActivityId);
        activityId.innerText = selectedActivity.id;
        activityName.innerText = selectedActivity.name;
        activityDescription.innerText = selectedActivity.description;
        activityLocation.innerText = selectedActivity.location;
        activityPrice.innerText = selectedActivity.price.toFixed(2);
        activityDetails.style.display = "block";

        // if (selectedActivity.price > 0) {
        //     purchaseForm.style.display = "block";
        //     ticketForm.reset();
        // } else {
        //     purchaseForm.style.display = "none";
        // }
    }
};

// ticketForm.onsubmit = function (event) {
//     event.preventDefault();
//     const ticketCount = document.getElementById("ticketCount").value;
//     const creditCard = document.getElementById("creditCard").value;
//     const email = document.getElementById("email").value;
//     const activityName = activityDropdown.options[activityDropdown.selectedIndex].text;
//     const totalPrice = (ticketCount * parseFloat(activityPrice.innerText)).toFixed(2);

//     const message = `Your credit card has been charged $${totalPrice} for ${ticketCount} to ${activityName}. A confirmation email has been sent to ${email}.`;

//     purchaseMessage.innerText = message;
//     purchaseMessage.style.display = "block";
// };

populateCategoriesDropdown(categoryDropdown, categories);

};