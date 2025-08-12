import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProject: build.mutation({
      query: ( data ) => ({
        url: "/project/add-project",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddProjectMutation } = projectApi;
