"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { Select, Form } from "antd";

type OptionType = {
  label: string;
  value: string;
};

type EBSelectMultipleProps = {
  name: string;
  label?: string;
  options: OptionType[];
  disabled?: boolean;
  placeholder?: string;
  mode: "multiple" | "tags";
  className?: string;
  defaultValue?: string[];
};

const PSelectMultiple = ({
  name,
  label,
  options,
  disabled,
  placeholder = "Please select",
  mode,
  className,
  defaultValue,
}: EBSelectMultipleProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || []}
      render={({ field, fieldState }) => (
        <Form.Item
          label={label}
          validateStatus={fieldState.invalid ? "error" : ""}
          help={fieldState.error?.message}
          className={className}
        >
          <Select
            {...field}
            mode={mode}
            allowClear
            disabled={disabled}
            placeholder={placeholder}
            options={options}
            style={{ width: "100%" }}
            onChange={(value) => field.onChange(value)}
            getPopupContainer={(triggerNode) =>
              triggerNode.parentElement || document.body
            }
          />
        </Form.Item>
      )}
    />
  );
};

export default PSelectMultiple;
