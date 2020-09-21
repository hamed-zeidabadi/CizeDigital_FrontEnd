import {ProductsDealsData,ProductsBestSellersData} from './ProductsData'

const initialState = {
    ProductsDealsData,
    ProductsBestSellersData,
  };

 const ProductReducer =(state=initialState,action)=>{

    switch (action.type) {
       
    
        default:
          return state;
      }

 }


 export default ProductReducer