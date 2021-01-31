export const addItemToCart=(cartItems,itemToAdd)=>{
    const existingItem=cartItems.find(item=>item.id===itemToAdd.id);
    if(existingItem)
    {
        return cartItems.map(item=>{
            if(item.id===itemToAdd.id)
            return {
                ...item,
                quantity:item.quantity+1
            }
            else
            return item
        })
    }
    else
    return [
        ...cartItems,
        {
            ...itemToAdd,
            quantity:1
        }
    ]
}

export const RemoveCartItem=(cartItems,cartItem)=>{
    const existingItem=cartItems.find(item=>item.id===cartItem.id)
    if(existingItem.quantity===1)
    {
        return cartItems.filter(item=>item.id!==cartItem.id)
    }
    
    return cartItems.map(item=>
        item.id===cartItem.id?{
            ...cartItem,
            quantity:cartItem.quantity-1
        }:
        item)
}