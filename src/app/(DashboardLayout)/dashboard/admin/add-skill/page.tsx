"use client";
import { useAddSkillMutation } from "@/lib/redux/api/skillApi";
import PForm from "@/shared/form/PForm";
import PInput from "@/shared/form/PInput";
import { toastTopRight } from "@/shared/Notification";
import WaitLoading from "@/shared/WaitLoading";
import { Button } from "antd";
import React from "react";
import { FieldValues } from "react-hook-form";

const AddSkillPage = () => {
  const [addSkill, { isLoading }] = useAddSkillMutation();
  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await addSkill(data);
      console.log(res);
      if (res?.data) {
        toastTopRight("Skill added successfully!");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-6 p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-white mb-6 text-center">
        Add New Skill
      </h2>

      <PForm onSubmit={onSubmit}>
        <div className="">
          <PInput
            name="name"
            label="Skill Name"
            type="text"
            placeholder="Enter skill name (e.g., React)"
          />
        </div>

        <div className="">
          <PInput
            name="websiteLink"
            label="Website Link"
            type="text"
            placeholder="Enter official website link (e.g., https://react.dev)"
          />
        </div>

        <div className="">
          <PInput
            name="icon"
            label="SVG Icon"
            type="textarea"
            placeholder="Paste SVG string here"
          />
        </div>

        <div className="text-center">
          <Button
            type="primary"
            htmlType="submit"
            size="large"
            className="px-10 h-12 rounded-xl bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 
             hover:from-blue-500 hover:via-blue-400 hover:to-blue-300
             shadow-md hover:shadow-lg border-none text-white font-semibold tracking-wide
             transition-all duration-300 ease-in-out transform hover:-translate-y-0.5"
          >
            {isLoading ? <WaitLoading /> : "🚀 Add skill"}
          </Button>
        </div>
      </PForm>
    </div>
  );
};

export default AddSkillPage;
