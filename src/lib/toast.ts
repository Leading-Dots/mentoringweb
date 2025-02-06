import { toast } from "sonner";

type ToastType = "success" | "error" | "warning" | "info";

export const showToast = (
  title: string,
  type: ToastType = "info",
  description?: string
) => {
  switch (type) {
    case "success":
      toast.success(title);
      break;
    case "error":
      toast.error(title, {
        description,
      });
      break;
    case "warning":
      toast.warning(title, {
        description,
      });
      break;
    case "info":
      toast.info(title, {
        description,
      });
      break;
    default:
      toast.info(title, {
        description,
      });
  }
};

export const dismissToast = () => {
  toast.dismiss();
};
