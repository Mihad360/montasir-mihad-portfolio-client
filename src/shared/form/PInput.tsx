/* eslint-disable @typescript-eslint/no-unused-vars */
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

  // Dark mode friendly styles
  const baseStyle: React.CSSProperties = {
    backgroundColor: "#1e1e1e",
    border: "1px solid #333",
    color: "#fff",
    borderRadius: "8px",
    padding: "8px 12px",
    transition: "all 0.2s ease",
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue || ""}
      render={({ field, fieldState }) => (
        <Form.Item
          className="flex flex-col gap-1"
          label={
            label && (
              <span
                className="flex items-center gap-2"
                style={{ color: "#f5f5f5" }}
              >
                {icon}
                {label}
              </span>
            )
          }
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          validateStatus={fieldState.invalid ? "error" : ""}
          help={fieldState.error?.message}
        >
          {type === "textarea" ? (
            <Input.TextArea
              {...field}
              rows={rows || 4}
              placeholder={placeholder}
              readOnly={readOnly}
              tabIndex={tabIndex}
              style={baseStyle}
              onFocus={(e) => (e.target.style.borderColor = "#666")}
              onBlur={(e) => (e.target.style.borderColor = "#333")}
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
              style={baseStyle}
              onFocus={(e) => (e.target.style.borderColor = "#666")}
              onBlur={(e) => (e.target.style.borderColor = "#333")}
            />
          )}
        </Form.Item>
      )}
    />
  );
};

export default PInput;
