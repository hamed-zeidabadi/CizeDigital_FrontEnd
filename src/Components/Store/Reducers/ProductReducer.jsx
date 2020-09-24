import
 {ProductsDealsData , ProductsBestSellersData , ProductsFavoritsData , 
  ProductsNewestData , ProductsShopData } from './ProductsData'

const initialState = {
    ProductsDealsData,
    ProductsBestSellersData,
    ProductsFavoritsData,
    ProductsNewestData,
    ProductsShopData,

  };

 const ProductReducer =( state = initialState , action )=>{

    switch (action.type) {

      case 'ADD_TO_CART':

       let addedItem = state.ProductsShopData.items.find(item=> item.id === action.id)
        //check if the action id exists in the addedItems
       let existed_item= state.ProductsShopData.addedItems.find(item=> item.id === action.id )

       if(existed_item){
        addedItem.quantity += 1 
           return{
              ...state,
               total: state.ProductsShopData.total + addedItem.price 
                }
      }

       else if (!existed_item){

          addedItem.quantity = 1;
          //calculating the total
          let newTotal = state.ProductsShopData.total + addedItem.price 
        
          return{

              ...state,
              addedItems: [ state.ProductsShopData.addedItems.push({...addedItem}) ],
              // addedItems: [...state.ProductsShopData.addedItems, addedItem],
              total : newTotal
          }
          
      }
       
    
        default:
          return state;
      }

 }


 export default ProductReducer