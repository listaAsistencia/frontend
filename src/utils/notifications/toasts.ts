import toast from "react-hot-toast";

export const showSuccessNotification = (message: string) => {
    toast.success(message);
}

export const showErrorNotification = (message: string) => {
    toast.error(message);
}