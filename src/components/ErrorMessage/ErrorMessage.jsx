import Swal from 'sweetalert2';

const ErrorMessage = () => {
  const Toast = Swal.mixin({
    toast: true,
    position: 'center',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    background: '#00aeea',
    didOpen: toast => {
      toast.onmouseenter = Swal.stopTimer;
      toast.onmouseleave = Swal.resumeTimer;
    },
  });

  Toast.fire({
    icon: 'error',
    color: '#fff',
    iconColor: '#fff',
    title: 'Please enter a valid value',
  });
};

export default ErrorMessage;
