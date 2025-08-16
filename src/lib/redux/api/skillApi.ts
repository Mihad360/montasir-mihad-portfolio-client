import { baseApi } from "./baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSkill: build.mutation({
      query: (data) => ({
        url: "/skill/add-skill",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["skill"],
    }),
    getSkills: build.query({
      query: () => ({
        url: "/skill/skills",
        method: "GET",
      }),
      providesTags: ["skill"],
    }),
  }),
});

export const { useAddSkillMutation, useGetSkillsQuery } = skillApi;
