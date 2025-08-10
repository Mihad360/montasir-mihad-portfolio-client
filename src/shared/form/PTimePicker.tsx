"use client";

import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { TimePicker, Form } from "antd";
import dayjs from "dayjs";

type TTimePickerProps = {
  name: string;
  label?: string;
  disabled?: boolean;
  className?: string;
  defaultValue?: string | dayjs.Dayjs;
};

const PTimePicker = ({
  name,
  label,
  disabled,
  className,
  defaultValue,
}: TTimePickerProps) => {
  const { control } = useFormContext();
  const format = "HH:mm";

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue ? dayjs(defaultValue, format) : null}
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
          validateStatus={fieldState.invalid ? "error" : ""}
          help={fieldState.error?.message}
          className={`${className || ""} flex flex-col`}
        >
          <TimePicker
            {...field}
            format={format}
            size="middle"
            style={{ width: "100%" }}
            disabled={disabled}
            onChange={(time) => field.onChange(time)}
            value={field.value}
            placeholder={label ? `Enter your ${label}` : undefined}
          />
        </Form.Item>
      )}
    />
  );
};

export default PTimePicker;
