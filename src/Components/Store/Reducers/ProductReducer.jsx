import {ProductsDealsData,ProductsBestSellersData,ProductsFavoritsData} from './ProductsData'

const initialState = {
    ProductsDealsData,
    ProductsBestSellersData,
    ProductsFavoritsData,
  };

 const ProductReducer =(state=initialState,action)=>{

    switch (action.type) {
       
    
        default:
          return state;
      }

 }


 export default ProductReducer