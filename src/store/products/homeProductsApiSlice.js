import { apiSlice } from "../../apis/apiSlice";

export const productsHomeApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchHomeProducts: builder.query({
      query: (category) => {
        return `products?category=${category}&_page=1&_limit=8`;
      },
      providesTags: ["Posts"],
    }),
    fetchHomecategory: builder.query({
      query: (id) => `category?id=${id}`,
      providesTags: ["Posts"],
    }),
    categorysInHome: builder.query({
      query: () => "category",
      providesTags: ["Posts"],
    }),
    productsHasDiscount: builder.query({
      query: (discount) =>
        `http://localhost:3001/products?Discount=${discount}&_page=1`,
      providesTags: ["Posts"],
    }),
    subcategoryHome: builder.query({
      query: () => {
        return `subcategory`;
      },
      providesTags: ["Posts"],
    }),
  }),
});

export const {
  useCategorysInHomeQuery,
  useFetchHomeProductsQuery,
  useFetchHomecategoryQuery,
  useProductsHasDiscountQuery,
  useSubcategoryHomeQuery,
} = productsHomeApiSlice;
