/* eslint-disable @typescript-eslint/no-explicit-any */
// baseApi.js
import {
  BaseQueryApi,
  createApi,
  fetchBaseQuery,
} from "@reduxjs/toolkit/query/react";

const rawBaseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_BASE_URL,
});

const baseQuery = async (args: any, api: BaseQueryApi, extraOptions: any) => {
  // console.log("[baseApi] Request args:", args);

  const result = await rawBaseQuery(args, api, extraOptions);

  if (result.error) {
    console.error("[baseApi] Error:", result.error);
  } else {
    console.log("[baseApi] Response:", result.data);
  }

  return result;
};

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery,
  tagTypes: ["project"],
  endpoints: () => ({}),
});
