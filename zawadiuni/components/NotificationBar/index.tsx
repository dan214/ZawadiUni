import { toast, cssTransition } from 'react-toastify';


export const toastNotification = (actionType: "error" | "success", message: string) => {
    const Zoom = cssTransition({
        enter: 'zoomIn',
        exit: 'zoomOut',
    });
    switch (actionType) {
        case 'success':
            toast.success(message, {
                position: "top-center",
                autoClose: 6000
            });
            break;
        case 'error':
            toast.error(message, {
                position: "top-center",
                pauseOnHover: true,
                autoClose: 6000
            });
            break;
        default:
    }
};
