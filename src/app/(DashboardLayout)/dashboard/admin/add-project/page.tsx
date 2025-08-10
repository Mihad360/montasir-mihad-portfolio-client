/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import PDatePicker from "@/shared/form/PDatePicker";
import PForm from "@/shared/form/PForm";
import PInput from "@/shared/form/PInput";
import PSelectMultiple from "@/shared/form/PMultipleSelect";
import PSelect from "@/shared/form/PSelect";
import { Button, Upload, message } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import type { FieldValues } from "react-hook-form";
import { useState } from "react";
import { Star } from "lucide-react";

const categoryOptions = [
  { label: "Full Stack", value: "Full Stack" },
  { label: "Frontend", value: "Frontend" },
  { label: "Backend", value: "Backend" },
];

const statusOptions = [
  { label: "Completed", value: "Completed" },
  { label: "Ongoing", value: "Ongoing" },
  { label: "Pending", value: "Pending" },
];

const yesNoOptions = [
  { label: "Yes", value: true },
  { label: "No", value: false },
];

const techOptions = [
  { label: "React", value: "React" },
  { label: "Node.js", value: "Node.js" },
  { label: "MongoDB", value: "MongoDB" },
  { label: "Tailwind CSS", value: "Tailwind CSS" },
  { label: "TypeScript", value: "TypeScript" },
  { label: "Next.js", value: "Next.js" },
  { label: "Express.js", value: "Express.js" },
  { label: "PostgreSQL", value: "PostgreSQL" },
];

export default function AddProjectPage() {
  const [fileList, setFileList] = useState([]);

  const handleChange = ({ fileList: newFileList }: any) => {
    if (newFileList.length > 6) {
      message.error("You can only upload up to 6 images!");
      return;
    }
    setFileList(newFileList);
  };

  const onSubmit = (data: FieldValues) => {
    console.log({
      ...data,
      images: fileList.map((file: any) => file.url || file.thumbUrl),
    });
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
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div className="space-y-5">
                <PInput
                  name="title"
                  type="text"
                  label="Project Title"
                  className=" focus:border-blue-500 focus:ring-blue-500 text-white "
                />
                <PSelect
                  name="category"
                  label="Category"
                  options={categoryOptions}
                  className=" border-gray-600 text-white [&>div]:text-gray-200 [&>div]:placeholder-gray-400"
                />
                <PSelect
                  name="status"
                  label="Status"
                  options={statusOptions}
                  className=" border-gray-600 text-white [&>div]:text-gray-200 [&>div]:placeholder-gray-400"
                />
                <PInput
                  name="durationInDays"
                  type="number"
                  label="Duration (Days)"
                  className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
                />
              </div>

              <div className="space-y-5">
                <PDatePicker
                  name="projectAddedDate"
                  label="Project Added Date"
                  className=" border-gray-600 [&>input]:text-white [&>input]:placeholder-gray-400"
                />
                <PSelect
                  name="isGroupProject"
                  label="Group Project?"
                  options={yesNoOptions}
                  className=" border-gray-600 text-white [&>div]:text-gray-200 [&>div]:placeholder-gray-400"
                />
                <PInput
                  name="team"
                  type="number"
                  label="Team Size"
                  className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
                />
                <PSelectMultiple
                  mode="multiple"
                  name="technologies"
                  label="Technologies"
                  options={techOptions}
                  className=" border-gray-600 text-white [&>div]:text-gray-200 [&>div]:placeholder-gray-400"
                />
              </div>
            </div>

            {/* Project Details */}
            <div className="grid grid-cols-1 gap-6 mb-8">
              <PInput
                name="brief"
                type="textarea"
                label="Project Brief"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <PInput
                name="outcome"
                type="textarea"
                label="Project Outcome"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
            </div>

            {/* Image Upload */}
            <div className="mb-8">
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

            {/* Links */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <PInput
                name="githubClient"
                type="url"
                label="GitHub Client"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <PInput
                name="githubServer"
                type="url"
                label="GitHub Server"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
              <PInput
                name="liveUrl"
                type="url"
                label="Live URL"
                className=" border-gray-600 focus:border-blue-500 focus:ring-blue-500 text-white placeholder-gray-400"
              />
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="primary"
                htmlType="submit"
                size="large"
                className="px-12 h-11 bg-blue-600 hover:bg-blue-500 border-none text-white font-medium transition-colors"
              >
                Submit Project
              </Button>
            </div>
          </PForm>
        </div>
      </div>
    </div>
  );
}
