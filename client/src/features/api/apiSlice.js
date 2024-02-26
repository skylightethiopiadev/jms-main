import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// const authorization = {
//   authorization: `Bearer ${localStorage.getItem("jwt")}`,
// };

let tag = [];

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://192.168.100.12:5000/jms/app/v1",
  }),
  tagTypes: ["categories", "cases"],
  endpoints: (builder) => ({
    //user signup
    userRegister: builder.mutation({
      query: (data) => ({
        url: "/user/signup",
        method: "POST",
        body: data,
      }),
    }),

    //user login
    userLogin: builder.mutation({
      query: (data) => ({
        url: "/user/login",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["get-all-users"],
    }),

    //create
    create: builder.mutation({
      query: (data) => {
        data?.tag.map((d) => tag.push(d));
        return {
          url: data.url,
          method: "POST",
          body: data,
          // headers: authorization,
        };
      },
      invalidatesTags: () => {
        return [...new Set(tag)];
      },
    }),

    //read
    read: builder.query({
      query: (data) => {
        data?.tag.map((d) => tag.push(d));
        return {
          url: data.url,
          method: "GET",
          // headers: authorization,
        };
      },
      providesTags: () => {
        return [...new Set(tag)];
      },
    }),

    readChat: builder.query({
      query: (data) => {
        data?.tag.map((d) => tag.push(d));
        // console.log(data, "rtkkkkkkk in api slice");
        return {
          url: data.url,
          method: "GET",
          // headers: authorization,
        };
      },
      providesTags: () => {
        return [...new Set(tag)];
      },
    }),
    //update
    update: builder.mutation({
      query: (data) => {
        data?.tag.map((d) => tag.push(d));
        return {
          url: data.url,
          method: "PUT",
          body: data,
          // headers: authorization,
        };
      },
      invalidatesTags: () => {
        return [...new Set(tag)];
      },
    }),

    //delete
    delete: builder.mutation({
      query: (data) => {
        data?.tag.map((d) => tag.push(d));
        return {
          url: data.url,
          method: "DELETE",
          body: data,
          // headers: authorization,
        };
      },
      invalidatesTags: () => {
        return [...new Set(tag)];
      },
    }),
    //GET ALL ROLES
    getAllUsers: builder.query({
      query: () => ({
        url: `/users`,
        method: "GET",
        // headers: authorization,
      }),
      provideTags: ["get-all-users"],
    }),

    //GET SINGLE ROLE
    getSingleRole: builder.query({
      query: (param) => ({
        url: `/roles/view?id=${param.id}`,
        method: "GET",
        // headers: authorization,
      }),
      provideTags: ["get-all-roles"],
    }),

    //GET ALL ROLES
    getAllRoles: builder.query({
      query: () => ({
        url: `/roles/all`,
        method: "GET",
        // headers: authorization,
      }),
      provideTags: ["get-all-roles"],
    }),

    //CREATE NEW ROLE
    createRole: builder.mutation({
      query: (data) => ({
        url: "/roles/create",
        method: "POST",
        body: data,
        // headers: authorization,
      }),
      invalidatesTags: ["get-all-roles"],
    }),

    //UPDATE ROLE
    updateRole: builder.mutation({
      query: (data) => ({
        url: `/roles/update?id=${data.id}`,
        method: "PUT",
        body: data,
        // headers: authorization,
      }),
      invalidatesTags: ["get-all-roles"],
    }),

    //GET ALL CLIENT TYPE
    getAllClientType: builder.query({
      query: () => ({
        url: `/client_type/all`,
        method: "GET",
      }),
      provideTags: ["client-type"],
    }),

    //GET SINGLE CLIENT TYPE
    getSingleClientType: builder.query({
      query: (data) => ({
        url: `/client_type/single?id=${data.id}`,
        method: "GET",
      }),
      provideTags: ["client-type"],
    }),

    //CREATE NEW CLIENT TYPE
    createClientType: builder.mutation({
      query: (data) => ({
        url: "/client_type/create",
        method: "POST",
        body: data,
        // headers: authorization,
      }),
      invalidatesTags: ["client-type"],
    }),

    //UPDATE CLIENT TYPE
    updateClientType: builder.mutation({
      query: (data) => ({
        url: `/client_type/update?id=${data.id}`,
        method: "PUT",
        body: data,
        // headers: authorization,
      }),
      invalidatesTags: ["client-type"],
    }),

    //CREATE NEW SERVICE AREA
    createServiceArea: builder.mutation({
      query: (data) => ({
        url: "/service_area/create",
        method: "POST",
        body: data,
        // headers: authorization,
      }),
      invalidatesTags: ["get-all-service-area"],
    }),

    //UPDATE CLIENT TYPE
    updateServiceArea: builder.mutation({
      query: (data) => ({
        url: `/service_area/update?id=${data.id}`,
        method: "PUT",
        body: data,
        // headers: authorization,
      }),
      invalidatesTags: ["get-all-service-area"],
    }),

    //GET ALL CLIENT TYPE
    getAllServiceArea: builder.query({
      query: () => ({
        url: `/service_area/all`,
        method: "GET",
      }),
      provideTags: ["get-all-service-area"],
    }),

    //GET ALL CLIENT TYPE
    getSingleServiceArea: builder.query({
      query: (data) => ({
        url: `/service_area/all?id=${data.id}`,
        method: "GET",
      }),
      provideTags: ["get-all-service-area"],
    }),

    //CREATE NEW REPRESENTATIVE
    createRepresentative: builder.mutation({
      query: (data) => ({
        url: "/representatives/create",
        method: "POST",
        body: data,
        // headers: authorization,
      }),
      invalidatesTags: ["get-all-representative"],
    }),

    //UPDATE REPRESENTATIVE
    updateRepresentative: builder.mutation({
      query: (data) => ({
        url: `/representatives/update?id=${data.id}`,
        method: "PUT",
        body: data,
        // headers: authorization,
      }),
      invalidatesTags: ["get-all-representative"],
    }),

    //GET ALL REPRESENTATIVE
    getAllRepresentative: builder.query({
      query: () => ({
        url: `/representatives/all`,
        method: "GET",
      }),
      provideTags: ["get-all-representative"],
    }),

    //GET SINGLE REPRESENTATIVE
    getSingleRepresentative: builder.query({
      query: (param) => ({
        url: `/roles/view?id=${param.id}`,
        method: "GET",
        // headers: authorization,
      }),
      provideTags: ["get-all-representative"],
    }),
    //##############################
  }),
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useGetAllUsersQuery,
  //role
  useGetSingleRoleQuery,
  useGetAllRolesQuery,
  useCreateRoleMutation,
  useUpdateRoleMutation,

  //client type
  useCreateClientTypeMutation,
  useGetAllClientTypeQuery,
  useGetSingleClientTypeQuery,
  useUpdateClientTypeMutation,

  //service
  useCreateServiceAreaMutation,
  useGetAllServiceAreaQuery,
  useGetSingleServiceAreaQuery,
  useUpdateServiceAreaMutation,

  //representative
  useCreateRepresentativeMutation,
  useGetAllRepresentativeQuery,
  useGetSingleRepresentativeQuery,
  useUpdateRepresentativeMutation,

  //category
  useCreateMutation,
  useReadQuery,
  useUpdateMutation,
  useDeleteMutation,
  useLazyReadChatQuery,
} = apiSlice;
