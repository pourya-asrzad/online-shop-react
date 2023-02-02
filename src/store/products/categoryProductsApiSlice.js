import { apiSlice } from "../../apis/apiSlice";

export const productsCategorysApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchCategorysProducts: builder.query({
      query: (fetchObj) => {
        if (fetchObj.subcategory == 0) {
          if (fetchObj.filterRange.isFilter) {
            return `http://localhost:3001/products?category=${fetchObj.category}&_page=${fetchObj.page}&_limit=12&price_gte=0&price_lte=${fetchObj.filterRange.range}`;
          }
          return `products?category=${fetchObj.category}&_page=${fetchObj.page}&_limit=12`;
        }
        if (fetchObj.subcategory != 0) {
          if (fetchObj.filterRange.isFilter) {
            return `http://localhost:3001/products?category=${fetchObj.category}&subcategory=${fetchObj.subcategory}&_page=${fetchObj.page}&_limit=12&price_gte=0&price_lte=${fetchObj.filterRange.range}`;
          }
          return `products?category=${fetchObj.category}&subcategory=${fetchObj.subcategory}&_page=${fetchObj.page}&_limit=12`;
        }
      },
      providesTags: ["Posts"],
    }),
    fetchCategoryscategory: builder.query({
      query: (id) => `category?id=${id}`,
      providesTags: ["Posts"],
    }),
    fetchSubcategory: builder.query({
      query: (fetchObj) => {
        return `subcategory?id=${fetchObj.subcategory}`;
      },
      providesTags: ["Posts"],
    }),
  }),
});

export const {
  useFetchCategorysProductsQuery,
  useFetchSubcategoryQuery,
  useFetchCategoryscategoryQuery,
} = productsCategorysApiSlice;
