/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import PDatePicker from "@/shared/form/PDatePicker";
import PForm from "@/shared/form/PForm";
import PInput from "@/shared/form/PInput";
import PSelectMultiple from "@/shared/form/PMultipleSelect";
import PSelect from "@/shared/form/PSelect";
import { Button, Upload, UploadFile, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { FieldValues } from "react-hook-form";
import { useState } from "react";
import PInputExpand from "@/shared/form/PInputExpand";
import {
  categoryOptions,
  statusOptions,
  techOptions,
  yesNoOptions,
} from "@/utils/constant/project";
import PInputObjectArray from "@/shared/form/PInputObjectArray";
import { useAddProjectMutation } from "@/lib/redux/api/projectApi";
import WaitLoading from "@/shared/WaitLoading";

export default function AddProjectPage() {
  const [fileList, setFileList] = useState<UploadFile[]>([]);
  const [addProject, { isLoading }] = useAddProjectMutation();

  const handleChange = ({ fileList: newFileList }: any) => {
    if (newFileList.length > 6) {
      message.error("You can only upload up to 6 images!");
      return;
    }
    setFileList(newFileList);
  };

  const onSubmit = async (data: FieldValues) => {
    try {
      const formData = new FormData();
      const dataInfo = {
        ...data,
        durationInDays: Number(data.durationInDays),
        stars: Number(data.stars),
        team: Number(data.team),
      };
      fileList.forEach((file) => {
        if (file.originFileObj) {
          formData.append("files", file.originFileObj);
        }
      });
      formData.append("data", JSON.stringify(dataInfo));
      for (const [key, value] of formData.entries()) {
        console.log(key, value);
      }
      const res = await addProject(formData);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-6 mt-3">
          <h1 className="text-xl md:text-2xl font-bold text-white mb-2">
            Add New Project
          </h1>
        </div>

        <div className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <PForm onSubmit={onSubmit}>
            {/* Basic Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-">
              <div className="space-y-5">
                <PInput
                  name="title"
                  type="text"
                  label="Project Title"
                  placeholder="Enter project title"
                  className=" focus:border-blue-500 focus:ring-blue-500 text-white "
                />
                <PSelect
                  name="category"
                  label="Category"
                  placeholder="Select category"
                  options={categoryOptions}
                  className=" border-gray-600 text-white [&>div]:text-gray-200 [&>div]:placeholder-gray-400"
                />
                <PSelect
                  name="status"
                  label="Status"
                  placeholder="Select status"
                  options={statusOptions}
                  className=" border-gray-600 text-white [&>div]:text-gray-200 [&>div]:placeholder-gray-400"
                />
                <PInput
                  name="durationInDays"
                  type="text"
                  label="Duration (Days)"
                  placeholder="Enter duration in days"
                  className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-5">
                <PDatePicker
                  name="addedDate"
                  label="Project Added Date"
                  className=" border-gray-600 [&>input]:text-white [&>input]:placeholder-gray-200"
                />
                <PSelect
                  name="isGroupProject"
                  label="Group Project?"
                  placeholder="Select option"
                  options={yesNoOptions}
                  className=" border-gray-600 text-white [&>div]:text-gray-200 [&>div]:placeholder-gray-400"
                />
                <PInput
                  name="team"
                  type="text"
                  label="Team Size"
                  placeholder="Enter team size"
                  className="border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-200"
                />
                <PSelectMultiple
                  mode="multiple"
                  name="technologies"
                  label="Technologies"
                  placeholder="Select technologies"
                  options={techOptions}
                  className=" border-gray-600 text-white [&>div]:text-gray-200 [&>div]:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1">
              <PInput
                name="brief"
                type="textarea"
                label="Project Brief"
                placeholder="Enter a brief description of the project"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <PInput
                name="outcome"
                type="textarea"
                label="Project Outcome"
                placeholder="Describe the outcomes of the project"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
            </div>
            <div className="space-y-5 mb-5">
              <PInputExpand
                name="description"
                label="Description"
                placeholder="Enter detailed project description"
              />
              <PInputExpand
                name="keyFeatures"
                label="Key Features"
                placeholder="List the key features of the project"
              />
              <div className="grid grid-cols-2 items-center gap-6">
                <PInputObjectArray
                  name="challenges"
                  label="Challenges"
                  placeholders={{
                    title: "Enter challenge title",
                    description: "Enter challenge description",
                  }}
                />
              </div>
            </div>

            {/* Image Upload */}
            <div className="mb-5">
              <label className="block mb-3 text-gray-300 font-medium">
                Project Images (Max 6)
              </label>
              <Upload
                listType="picture-card"
                fileList={fileList}
                onChange={handleChange}
                beforeUpload={() => false}
                className="[&>.ant-upload]: [&>.ant-upload]:border-gray-600 [&>.ant-upload]:text-gray-400 hover:[&>.ant-upload]:border-blue-500"
              >
                {fileList.length >= 6 ? null : (
                  <div className="text-gray-400">
                    <PlusOutlined />
                    <div className="mt-2">Upload</div>
                  </div>
                )}
              </Upload>
            </div>
            {/* Additional Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PInput
                name="stars"
                type="number"
                label="Stars"
                placeholder="Enter star rating (1-5)"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <PSelect
                name="featured"
                label="Featured?"
                placeholder="Select option"
                options={yesNoOptions}
                className=" border-gray-600 text-white [&>div]:text-gray-200 [&>div]:placeholder-gray-400"
              />
            </div>

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <PInput
                name="githubClient"
                type="text"
                label="GitHub Client"
                placeholder="Enter client-side GitHub URL"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <PInput
                name="githubServer"
                type="text"
                label="GitHub Server"
                placeholder="Enter server-side GitHub URL"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <PInput
                name="liveUrl"
                type="text"
                label="Live URL"
                placeholder="Enter live project URL"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
            </div>

            {/* Submit Button */}
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
                {isLoading ? <WaitLoading /> : "🚀 Submit Project"}
              </Button>
            </div>
          </PForm>
        </div>
      </div>
    </div>
  );
}
