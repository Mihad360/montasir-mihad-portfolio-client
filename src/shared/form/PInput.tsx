/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useFormContext } from "react-hook-form";
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
  readOnly?: any;
  rows?: number;
  tabIndex?: any;
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
  const { register } = useFormContext();
  return (
    <div className="grid w-full items-center gap-3">
      <Label className="flex gap-2 items-center">
        {icon}
        {label}
      </Label>
      {type === "textarea" ? (
        <textarea
          {...register(name)}
          rows={rows || 4}
          placeholder={placeholder}
          defaultValue={defaultValue}
          readOnly={readOnly}
          tabIndex={tabIndex}
          className={`resize-none border border-input bg-background px-3 py-2 rounded-md text-sm shadow-sm ${
            className || ""
          }`}
        />
      ) : (
        <Input
          {...register(name)}
          type={type}
          size={size}
          placeholder={placeholder}
          defaultValue={defaultValue}
          readOnly={readOnly}
          tabIndex={tabIndex}
          className={className || ""}
        />
      )}
    </div>
  );
};

export default PInput;
