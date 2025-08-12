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

  const darkFieldStyle: React.CSSProperties = {
    backgroundColor: "#1e1e1e",
    border: "1px solid #333",
    color: "#fff",
    borderRadius: "8px",
    padding: "8px 12px",
    transition: "all 0.2s ease",
  };

  const darkFieldFocus = "#666"; // focus border color
  const darkFieldBlur = "#333"; // blur border color

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
            style={darkFieldStyle}
            disabled={disabled}
            onChange={(time) => field.onChange(time)}
            value={field.value}
            placeholder={label ? `Enter your ${label}` : undefined}
            onFocus={(e) => (e.target.style.borderColor = darkFieldFocus)}
            onBlur={(e) => (e.target.style.borderColor = darkFieldBlur)}
          />
        </Form.Item>
      )}
    />
  );
};

export default PTimePicker;
