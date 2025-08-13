import { baseApi } from "./baseApi";

const skillApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    addSkill: build.mutation({
      query: (data) => ({
        url: "/skill/add-skill",
        method: "POST",
        body: data,
      }),
    }),
    getSkills: build.query({
      query: () => ({
        url: "/skill/skills",
        method: "GET",
      }),
    }),
  }),
});

export const { useAddSkillMutation, useGetSkillsQuery } = skillApi;
