import { createSlice } from "@reduxjs/toolkit";


const cartSlice=createSlice({
    name:"cart",
    initialState:{
        items:[],
        totalCartPrice:0, 
        totalQuantity:0 ,
        discountCode:"mahesh123" 

    },
    reducers:{
        addItem:(state,action)=>{
            // state.items.push(action.payload) 
            // console.log(state.items,"state")
            // const index = state.items.indexOf((item) =>item.card.info.id)
            // console.log(index)
            

            const index = state.items.findIndex((item) =>item.card.info.id===action.payload.card.info.id)
            // console.log(index)
            if(index!==-1){
                state.items[index].quantity=action.payload.quantity||1

            }else{
                state.items.push({...action.payload,quantity:action.payload.quantity||1,singlePrice:action.payload.card.info.defaultPrice/100||action.payload.card.info.price/100})
               
            }
            state.totalQuantity=state.items.reduce((total,item)=>total+item.quantity,0)
            state.totalCartPrice=state.items.reduce((total,item)=>total+item.singlePrice,0)


          },
        removeItems:(state,action)=>{
            console.log("Action Payload:", action.payload); // Log the action payload
            const indexRemove = state.items.findIndex(item => item.card.info.id === action.payload);
            console.log("Index to Remove:", indexRemove); // Log the index to be removed
            
              state.items.splice(indexRemove, 1);
              state.totalQuantity=state.items.reduce((total,item)=>total+item.quantity,0)
            state.totalCartPrice=state.items.reduce((total,item)=>total+item.singlePrice,0)
            
        },
        clearItems:(state,action)=>{
            state.items.length=0;
        },
        increaseQuantity(state, action) {
            const index = state.items.findIndex((item) =>item.card.info.id===action.payload.id)
            console.log(index,action.payload.id,"indexsswejkjf")
            if(index!==-1){
            state.items[index].quantity+=1;
            state.items[index].singlePrice=(state.items[index].card.info.defaultPrice/100||state.items[index].card.info.price/100)*state.items[index].quantity
            state.totalQuantity=state.items.reduce((total,item)=>total+item.quantity,0)
            state.totalCartPrice=state.items.reduce((total,item)=>total+item.singlePrice,0)
          }},
          decreaseQuantity(state, action) {
            const index = state.items.findIndex((item) =>item.card.info.id===action.payload.id)
            if (index!==-1) {
                if(state.items[index].quantity>1){
              state.items[index].quantity-=1;
              state.items[index].singlePrice=state.items[index].card.info.defaultPrice/100||state.items[index].card.info.price/100*state.items[index].quantity
              state.totalQuantity=state.items.reduce((total,item)=>total+item.quantity,0)
              state.totalCartPrice=state.items.reduce((total,item)=>total+item.singlePrice,0)


            }
          }},
          promoCode:(state,action)=>{
            const enteredCode = action.payload;
            console.log(enteredCode,"enteredCode")
  if (enteredCode === state.discountCode) {
    state.totalCartPrice -= 50; 
  }
          }
    }
})

export default cartSlice.reducer;
export const {addItem,removeItems,clearItems, increaseQuantity, decreaseQuantity,promoCode}=cartSlice.actions;