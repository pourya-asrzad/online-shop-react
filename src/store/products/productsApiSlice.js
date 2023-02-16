import { apiSlice } from "../../apis/apiSlice";

export const productsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    fetchProducts: builder.query({
      query: (page) => {
        if (page.filter == "null") {
          return `products?_sort=createdAt&_page=${page.page}&_order=desc`;
        } else {
          return `products?category=${page.filter}&_page=${page.page}`;
        }
      },
      providesTags: ["Posts"],
    }),
    fetchsubcategory: builder.query({
      query: () => "subcategory",
      providesTags: ["Posts"],
    }),
    fetchOrders: builder.query({
      query: (page) => {
        if (page.filter == "null") {
          return `orders?_page=${page.page}&_limit=7&_sort=createdAt&_order=desc`;
        } else {
          return `orders?delivered=${page.filter}&_page=${page.page}&_limit=7&_sort=createdAt&_order=desc`;
        }
      },
      keepUnusedDataFor: 0.000001,
      providesTags: ["Posts"],
    }),
    fetchcategory: builder.query({
      query: () => "category",
      providesTags: ["Posts"],
      keepUnusedDataFor: 0.0001,
    }),
    fetchOrdersLength: builder.query({
      query: (page) => {
        if (page.filter == "null") {
          return `orders?_sort=createdAt&_order=desc`;
        } else {
          return `orders?delivered=${page.filter}&_sort=createdAt&_order=desc`;
        }
      },
      keepUnusedDataFor: 0.0001,
      transformResponse: (res) => {
        return res.length;
      },
      providesTags: ["Posts"],
    }),
    fetchProductsLength: builder.query({
      query: (page) => `products`,
      keepUnusedDataFor: 0.0001,
      transformResponse: (res) => {
        return res.length;
      },
      providesTags: ["Posts"],
    }),
    createProduct: builder.mutation({
      query: (post) => ({
        url: "products",
        method: "POST",
        body: post,
      }),
      invalidatesTags: ["Posts"],
    }),
    getProduct: builder.query({
      query: (id) => `products/${id}`,
      keepUnusedDataFor: 1,
    }),
    deleteProduct: builder.mutation({
      query: (id) => ({
        url: `products/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Posts"],
    }),
    editProduct: builder.mutation({
      query: (productInfo) => ({
        url: `products/${productInfo.id}`,
        method: "PATCH",
        body: productInfo.body,
      }),

      invalidatesTags: ["Posts"],
    }),
    changeDelivery: builder.mutation({
      query: (id) => ({
        url: `orders/${id}`,
        method: "PATCH",
        body: { deliverytime: +new Date(), delivered: "true" },
      }),
      invalidatesTags: ["Posts"],
    }),
    getAllOrders: builder.query({
      query: () => "orders",
      providesTags: ["Posts"],
    }),
  }),
});

export const {
  useFetchProductsQuery,
  useCreateProductMutation,
  useFetchsubcategoryQuery,
  useFetchcategoryQuery,
  useFetchOrdersQuery,
  useFetchOrdersLengthQuery,
  useDeleteProductMutation,
  useEditProductMutation,
  useGetProductQuery,
  useChangeDeliveryMutation,
  useGetAllOrdersQuery,
  useFetchProductsLengthQuery,
} = productsApiSlice;
