import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import CryptoJS from "crypto-js";

const authorization = {
  authorization: `Bearer ${localStorage.getItem("jwt")}`
};

// const encrypt = (data) => {
//   const ENC = "bf3c199c2470cb477d907b1e0917c17f";
//   const IV = "5183666c72eec9e4";
//   const ALGO = "aes-256-cbc";

//   let cipher = crypto.createCipheriv(ALGO, ENC, IV);
//   let encrypted = cipher.update(data.split("?")[1], "utf8", "base64");
//   encrypted += cipher.final("base64");

//   const cc = data.split("?")[0].split("/").splice(1, 2).join("/");
//   // const dd = CryptoJS.AES.encrypt(data.split("?")[1], "gedi");
//   // console.log(data, "data", data.split("?")[1], "split", dd, "encrypted self");
//   // const bb = CryptoJS.AES.decrypt(dd, "food").toString(CryptoJS.enc.Utf8);
//   return `${cc}?q=${encrypted}`;
// };

let tag = [];

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    // baseUrl: "http://192.168.100.12:5000/jms/app/v1",
    baseUrl: "http://localhost:5000/jms/app/v1"
  }),
  tagTypes: [
    "users",
    "institutions",
    "permissions",
    "cases",
    "categories",
    "applications",
    "payments",
    "case-managers",
    "lawyers",
    "groups",
    "chats",
    "privates"
  ],
  endpoints: builder => ({
    //user signup
    userRegister: builder.mutation({
      query: data => ({
        url: "/user/signup",
        method: "POST",
        body: data,
        credentials: "include"
      })
    }),

    //user login
    userLogin: builder.mutation({
      query: data => ({
        url: "/user/login",
        method: "POST",
        body: data,
        credentials: "include"
      }),
      invalidatesTags: ["get-all-users"]
    }),

    //user logout
    userLogout: builder.mutation({
      query: () => ({
        url: "/user/logout",
        method: "POST",
        credentials: "include"
      })
    }),

    //user forget
    forgetPassword: builder.mutation({
      query: data => ({
        url: "/user/forgetPassword",
        method: "POST",
        body: data,
        credentials: "include"
      })
    }),

    //user forget
    resetPassword: builder.mutation({
      query: data => ({
        url: `/user/resetPassword?resetToken=${data.resetToken}`,
        method: "POST",
        body: data,
        credentials: "include"
      })
    }),

    //user forget
    updatePassword: builder.mutation({
      query: data => ({
        url: `/account/updatePassword`,
        method: "PUT",
        body: data,
        credentials: "include"
      })
    }),

    updateUsersCredentials: builder.mutation({
      query: data => ({
        url: `/account/updateUsersCredentials`,
        method: "PUT",
        body: data,
        credentials: "include"
      })
    }),

    //create
    create: builder.mutation({
      query: data => {
        data?.tag.map(d => tag.push(d));
        // console.log(data.url, encrypt(data.url), "both");
        return {
          url: data.url,
          method: "POST",
          body: data,
          credentials: "include",
          headers: authorization
        };
      },
      invalidatesTags: () => {
        return [...new Set(tag)];
      }
    }),

    //read
    read: builder.query({
      query: data => {
        data?.tag.map(d => tag.push(d));
        return {
          url: data.url,
          method: "GET",
          credentials: "include",

          headers: authorization
        };
      },
      providesTags: () => {
        return [...new Set(tag)];
      }
    }),

    //update
    // update: builder.mutation({
    //   query: (data) => {
    //     data?.tag.map((d) => tag.push(d));
    //     return {
    //       url: data.url,
    //       method: "PUT",
    //       body: data,
    //       credentials: "include",

    //       headers: authorization,
    //     };
    //   },
    //   invalidatesTags: () => {
    //     return [...new Set(tag)];
    //   },
    // }),

    update: builder.mutation({
      query: data => {
        let newUrl = "";
        let newTag;
        if (!data.url) {
          for (var key of data.entries()) {
            if (key[0] === "url") newUrl = key[1];
            if (key[0] === "tag") newTag = key[1].split(",");
          }
        } else {
          newTag = data.tag;
        }

        newTag.map(d => tag.push(d));

        return {
          url: data.url ? data.url : newUrl,
          method: "PUT",
          body: data,
          credentials: "include"
        };
      },
      invalidatesTags: () => {
        return [...new Set(tag)];
      }
    }),

    //delete
    delete: builder.mutation({
      query: data => {
        data?.tag.map(d => tag.push(d));
        return {
          url: data.url,
          method: "DELETE",
          body: data,
          credentials: "include",

          headers: authorization
        };
      },
      invalidatesTags: () => {
        return [...new Set(tag)];
      }
    }),

    //########################### chat routing ###############################
    readChat: builder.query({
      query: data => {
        data?.tag.map(d => tag.push(d));
        return {
          url: data.url,
          method: "GET"
          // headers: authorization,
        };
      },
      providesTags: () => {
        return [...new Set(tag)];
      }
    })
  })
});

export const {
  useUserRegisterMutation,
  useUserLoginMutation,
  useUserLogoutMutation,
  useForgetPasswordMutation,
  useResetPasswordMutation,
  useUpdatePasswordMutation,

  useCreateMutation,
  useReadQuery,
  useUpdateMutation,
  useDeleteMutation,

  useLazyReadChatQuery,
  useLazyReadQuery,
  useUpdateUsersCredentialsMutation
} = apiSlice;