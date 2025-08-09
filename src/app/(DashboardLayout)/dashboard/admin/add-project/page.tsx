"use client";
import PDatePicker from "@/shared/form/PDatePicker";
import PForm from "@/shared/form/PForm";
import PInput from "@/shared/form/PInput";
import { Button } from "antd";
import { FieldValues } from "react-hook-form";

const AddProjectPage = () => {
  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };
  return (
    <div>
      <PForm onSubmit={onSubmit}>
        <PInput name="email" type="text" label="Email" />
        <PDatePicker name="add" label="Added date" />
        <Button htmlType="submit">Submit</Button>
      </PForm>
    </div>
  );
};

export default AddProjectPage;
