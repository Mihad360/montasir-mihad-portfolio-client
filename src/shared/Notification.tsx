// utils/toast.ts
import { notification } from "antd";

export const toastTopRight = (message: string, description?: string) => {
  notification.info({
    message,
    description,
    placement: "topRight",
    duration: 3,
  });
};
