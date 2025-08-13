"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select, Form } from "antd";

type TSelectOption = {
  label: string;
  value: string | boolean;
};

type TEBSelect = {
  options: TSelectOption[];
  name: string;
  label?: string;
  disabled?: boolean;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
};

const PSelect = ({
  options,
  name,
  label,
  disabled,
  placeholder,
  className,
  defaultValue,
}: TEBSelect) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field, fieldState }) => (
        <Form.Item
          label={
            label && (
              <span className="flex items-center gap-2 text-white">
                {label}
              </span>
            )
          }
          labelCol={{ span: 24 }} // Full width label
          wrapperCol={{ span: 24 }} // Full width input
          style={{ color: "white" }}
          validateStatus={fieldState.invalid ? "error" : ""}
          help={fieldState.error?.message}
          className={`${className || ""} flex flex-col`}
        >
          <Select
            {...field}
            allowClear
            disabled={disabled}
            placeholder={placeholder}
            options={options}
            onChange={(value) => field.onChange(value)}
            getPopupContainer={(triggerNode) =>
              triggerNode.parentElement || document.body
            }
            styles={{
              popup: {
                root: {
                  backgroundColor: "#1e1e1e",
                  color: "#fff",
                  border: "1px solid #333",
                  borderRadius: "8px",
                  width: "100%",
                },
              },
            }}
            className="custom-dark-select"
            classNames={{
              popup: {
                root: "custom-dark-select-dropdown",
              },
            }}
          />
        </Form.Item>
      )}
    />
  );
};

export default PSelect;
