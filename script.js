console.log("welcome to inventory system \n chose an option:")
inventory = []
for( ;;){
    userOptionsInputs = prompt("1- add item \n 2- delete item \n 3- show items \n 4- show total price \n 5- exit")
    
    if(userOptionsInputs == 1)
        {
            itemName = prompt("enter item name")
            if (inventory.includes(itemName)){
                console.log("item already exists")
                continue
            }
            itemQuantity = prompt("enter item quantity")
            inventory.push({name: itemName, quantity: itemQuantity , price: (Math.random()*9) * itemQuantity})
        }
    else if(userOptionsInputs == 2)
    {
        itemName = prompt("enter item name")
        if(inventory.includes(itemName) === false)
            {
                console.log("item does not exist")
                continue
            }
        inventory.splice(inventory.indexOf(itemName), 1)
    }

    else if(userOptionsInputs == 3)
    {
        console.log(inventory)
    }

    else if(userOptionsInputs == 4)
    {
        console.log(inventory.price)
    }

    else if(userOptionsInputs == 5)
    {
        console.log("good bye")
        break
    }

    else
    {
        console.log("invalid input")
    }

}