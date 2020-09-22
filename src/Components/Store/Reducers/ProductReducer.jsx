import
 {ProductsDealsData , ProductsBestSellersData , ProductsFavoritsData , 
  ProductsNewestData , ProductsShopData} from './ProductsData'

const initialState = {
    ProductsDealsData,
    ProductsBestSellersData,
    ProductsFavoritsData,
    ProductsNewestData,
    ProductsShopData
  };

 const ProductReducer =(state=initialState,action)=>{

    switch (action.type) {
       
    
        default:
          return state;
      }

 }


 export default ProductReducer