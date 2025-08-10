"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { DatePicker, Form } from "antd";
import dayjs from "dayjs";

type EBDatePickerProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  defaultValue?: string;
  className?: string;
};

const PDatePicker = ({
  name,
  label,
  disabled,
  defaultValue,
  className,
}: EBDatePickerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? dayjs(defaultValue) : null}
      render={({ field, fieldState }) => (
        <Form.Item
          label={
            label && (
              <span className="flex items-center gap-2 text-white">
                {label}
              </span>
            )
          }
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          className={`${className || ""} flex flex-col`}
          validateStatus={fieldState.invalid ? "error" : ""}
          help={fieldState.error?.message}
        >
          <DatePicker
            className="w-full"
            {...field}
            onChange={(date) => field.onChange(date)}
            value={field.value}
            disabled={disabled}
            format="YYYY-MM-DD"
          />
        </Form.Item>
      )}
    />
  );
};

export default PDatePicker;
