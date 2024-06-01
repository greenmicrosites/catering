
const justFood = (peopleAmount) => {  
    cateringName = "Just Food"    
    cateringprice = 300
}

const yourMama = (peopleAmount) => {
    cateringName = "Your Mama"    
    cateringprice = 1000   
}

const flavourHaven = (peopleAmount) => {
    cateringName = "Flavour Haven"    
    cateringprice = 3000
}

const createEvent = (eventName, peopleAmount, catering) => {
    return document.querySelector(".hlaska").innerHTML = "Událost " + eventName + " s cateringem od " + cateringName + " pro " + peopleAmount + " lidí za " + cateringprice*peopleAmount + " Kč."
}

createEvent("Narozeniny", 85, justFood())
