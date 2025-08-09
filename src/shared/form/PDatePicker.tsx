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
};

const PDatePicker = ({ name, label, disabled, defaultValue }: EBDatePickerProps) => {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? dayjs(defaultValue) : null}
      render={({ field, fieldState }) => (
        <Form.Item
          label={label}
          validateStatus={fieldState.invalid ? "error" : ""}
          help={fieldState.error?.message}
        >
          <DatePicker
            {...field}
            onChange={(date) => field.onChange(date)}
            value={field.value}
            disabled={disabled}
            style={{ width: "100%" }}
            format="YYYY-MM-DD"
          />
        </Form.Item>
      )}
    />
  );
};

export default PDatePicker;
