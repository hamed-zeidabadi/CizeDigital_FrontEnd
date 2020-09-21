import {ProductsDealsData,ProductsBestSellersData,ProductsFavoritsData,ProductsNewestData} from './ProductsData'

const initialState = {
    ProductsDealsData,
    ProductsBestSellersData,
    ProductsFavoritsData,
    ProductsNewestData
  };

 const ProductReducer =(state=initialState,action)=>{

    switch (action.type) {
       
    
        default:
          return state;
      }

 }


 export default ProductReducer