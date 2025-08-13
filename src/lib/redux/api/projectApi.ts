import { baseApi } from "./baseApi";

const projectApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addProject: build.mutation({
      query: (data) => ({
        url: "/project/add-project",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["project"],
    }),
    getProjects: build.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args) {
          args.forEach((item: { name: string; value: string }) => {
            params.append(item.name, item.value);
          });
        }
        return {
          url: "/project/projects",
          method: "GET",
          params: params,
        };
      },
      transformResponse: (response) => {
        return {
          data: response.data,
          meta: response.meta,
        };
      },
      providesTags: ["project"],
    }),
    getEachProjects: build.query({
      query: (id) => ({
        url: `/project/projects/${id}`,
        method: "GET",
      }),
      providesTags: ["project"],
    }),
  }),
});

export const {
  useAddProjectMutation,
  useGetProjectsQuery,
  useGetEachProjectsQuery,
} = projectApi;
