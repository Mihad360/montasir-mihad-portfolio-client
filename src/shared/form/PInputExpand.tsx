"use client";
import { Button, Form, Input } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";
import { ReactNode } from "react";

export type PInputExpandProps = {
  name: string;
  label?: string;
  placeholder?: string;
  size?: number;
  icon?: ReactNode;
  defaultValue?: string;
  readOnly?: boolean;
  rows?: number;
  tabIndex?: number;
  maxFields?: number;
};

const PInputExpand = ({
  name,
  label,
  placeholder,
  size,
  icon,
  defaultValue,
  readOnly,
  rows,
  tabIndex,
  maxFields,
}: PInputExpandProps) => {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  const baseStyle: React.CSSProperties = {
    backgroundColor: "#1e1e1e",
    border: "1px solid #333",
    color: "#fff",
    borderRadius: "8px",
    padding: "8px 12px",
    transition: "all 0.2s ease",
  };

  return (
    <div className="flex flex-col gap-2">
      {label && (
        <span className="flex items-center gap-2" style={{ color: "#f5f5f5" }}>
          {icon}
          {label}
        </span>
      )}

      {fields.map((field, index) => (
        <div key={field.id} className="flex items-center gap-2">
          <Controller
            control={control}
            name={`${name}.${index}`}
            defaultValue={defaultValue || ""}
            render={({ field, fieldState }) => (
              <Form.Item
                className="flex-1"
                validateStatus={fieldState.invalid ? "error" : ""}
                help={fieldState.error?.message}
                style={{ marginBottom: 0 }}
              >
                {rows ? (
                  <Input.TextArea
                    {...field}
                    rows={rows}
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
                    size={
                      size === 1 ? "small" : size === 3 ? "large" : "middle"
                    }
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

          <Button
            danger
            type="text"
            icon={<MinusCircleOutlined />}
            onClick={() => remove(index)}
          />
        </div>
      ))}

      {(!maxFields || fields.length < maxFields) && (
        <Button
          type="dashed"
          onClick={() => append("")}
          icon={<PlusOutlined />}
          className="w-fit"
        >
          Add
        </Button>
      )}
    </div>
  );
};

export default PInputExpand;
