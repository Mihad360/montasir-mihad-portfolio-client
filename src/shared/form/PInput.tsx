"use client";
import React from "react";
import { Input, Form } from "antd";
import { useFormContext, Controller } from "react-hook-form";
import { ReactNode } from "react";

export type EBInputType = {
  type: string;
  label?: string;
  name: string;
  size?: number;
  icon?: ReactNode;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  readOnly?: boolean;
  rows?: number;
  tabIndex?: number;
};

const PInput = ({
  type,
  label,
  name,
  size,
  icon,
  placeholder,
  className,
  defaultValue,
  readOnly,
  tabIndex,
  rows,
}: EBInputType) => {
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
              <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                {icon}
                {label}
              </span>
            )
          }
          validateStatus={fieldState.invalid ? "error" : ""}
          help={fieldState.error?.message}
          className={className}
        >
          {type === "textarea" ? (
            <Input.TextArea
              {...field}
              rows={rows || 4}
              placeholder={placeholder}
              readOnly={readOnly}
              tabIndex={tabIndex}
            />
          ) : (
            <Input
              {...field}
              type={type}
              size={size === 1 ? "small" : size === 3 ? "large" : "middle"}
              placeholder={placeholder}
              readOnly={readOnly}
              tabIndex={tabIndex}
              prefix={icon}
            />
          )}
        </Form.Item>
      )}
    />
  );
};

export default PInput;
