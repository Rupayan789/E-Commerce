

import { createSelector } from 'reselect';


const selectCart=state=>state.cart

export const selectCartItems=createSelector([selectCart],cart=>cart.cartItems)

export const selectHidden=createSelector([selectCart],
    cartSelect=>cartSelect.hidden)

export const countSelectItems=createSelector([selectCartItems],cartItems=>cartItems.reduce((accumulator,item)=>accumulator+item.quantity,0))

export const countTotal=createSelector([selectCartItems],cartItems=>cartItems.reduce((accumulator,item)=>accumulator+item.quantity*item.price,0))
