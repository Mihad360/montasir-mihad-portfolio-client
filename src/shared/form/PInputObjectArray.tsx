import { Button, Form, Input } from "antd";
import { PlusOutlined, MinusCircleOutlined } from "@ant-design/icons";
import { useFormContext, useFieldArray, Controller } from "react-hook-form";

type PInputObjectArrayProps = {
  name: string;
  label?: string;
  placeholders?: { title?: string; description?: string };
};

export default function PInputObjectArray({
  name,
  label,
  placeholders,
}: PInputObjectArrayProps) {
  const { control } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name,
  });

  return (
    <div className="flex flex-col gap-3">
      {label && <span className="text-white font-semibold">{label}</span>}

      {fields.map((field, index) => (
        <div
          key={field.id}
          className="flex flex-col md:flex-row gap-2 items-start md:items-center"
        >
          {/* Title */}
          <Controller
            control={control}
            name={`${name}.${index}.title`}
            defaultValue=""
            render={({ field }) => (
              <Form.Item style={{ marginBottom: 0 }}>
                <Input
                  {...field}
                  placeholder={placeholders?.title || "Title"}
                  style={{ backgroundColor: "#1e1e1e", color: "#fff" }}
                />
              </Form.Item>
            )}
          />

          {/* Description */}
          <Controller
            control={control}
            name={`${name}.${index}.description`}
            defaultValue=""
            render={({ field }) => (
              <Form.Item style={{ marginBottom: 0, flex: 1 }}>
                <Input
                  {...field}
                  placeholder={placeholders?.description || "Description"}
                  style={{ backgroundColor: "#1e1e1e", color: "#fff" }}
                />
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

      <Button
        type="dashed"
        icon={<PlusOutlined />}
        onClick={() => append({ title: "", description: "" })}
      >
        Add Challenge
      </Button>
    </div>
  );
}
