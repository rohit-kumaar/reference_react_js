import { toast } from 'react-toastify';

export const toastAlert = () =>
  toast.dark('Hey 👋, Your meal is added!', {
    position: 'bottom-right',
    autoClose: 1000,
  });
