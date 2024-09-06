'use client';
import { useState } from "react";
import { IoPersonOutline, IoPerson } from "react-icons/io5";
import { RiLockPasswordFill } from "react-icons/ri";
import { FcGoogle } from "react-icons/fc";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useAuthContext } from "@/app/context/AuthContext";
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';  // Importar useRouter

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [isRegistering, setIsRegistering] = useState(false);
  const [showPassword, setShowPassword] = useState(false); 
  const router = useRouter();  // Inicializar useRouter

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isRegistering) {
        Swal.fire({
          icon: 'success',
          title: 'Registro exitoso',
          text: '¡Tu cuenta ha sido creada con éxito!',
        });
        await registerUser(values);
      } else {
        Swal.fire({
          icon: 'success',
          title: 'Inicio de sesión exitoso',
          text: '¡Has iniciado sesión correctamente!',
        });
        await loginUser(values);
      }
    } catch (error) {
      console.error('Error:', error); 

      const errorCode = error.code || 'auth/unknown-error'; 
      let swalMessage;

      switch (errorCode) {
        case 'auth/invalid-email':
          swalMessage = 'El email proporcionado es inválido.';
          break;
        case 'auth/user-not-found':
          swalMessage = 'El email proporcionado no está registrado.';
          break;
        case 'auth/wrong-password':
          swalMessage = 'La contraseña es incorrecta.';
          break;
        case 'auth/weak-password':
          swalMessage = 'La contraseña proporcionada es demasiado débil.';
          break;
        case 'auth/invalid-credential':
          swalMessage = 'Las credenciales proporcionadas son inválidas.';
          break;
        default:
          swalMessage = 'Ha ocurrido un error inesperado. Inténtalo de nuevo.';
          break;
      }

      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: swalMessage,
      });
    }
  };

  return (
    <div className="fixed inset-0 z-10 flex justify-center items-center backdrop-blur-xl px-3">
      <form
        onSubmit={handleSubmit}
        className="bg-blue-900 py-4 px-6 rounded-xl max-w-md w-full space-y-4"
      >
        {/* Botón de volver */}
        <button
          type="button"
          onClick={() => router.back()}
          className="absolute top-4 left-4 text-white text-lg hover:underline"
        >
          Volver
        </button>

        <div className="flex justify-center items-center mb-4">
          <IoPersonOutline className="text-9xl text-white border-2 rounded-full border-white p-4" />
        </div>

        <div className="flex space-x-2 items-center">
          <IoPerson className="text-3xl text-white" />
          <input
            type="email"
            value={values.email}
            required
            placeholder="Email"
            className="p-2 rounded-e-lg w-full block"
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex items-center space-x-2">
          <RiLockPasswordFill className="text-3xl text-white" />
          <input
            type={showPassword ? "text" : "password"}
            value={values.password}
            required
            placeholder="Password"
            className="p-2 rounded-e-lg w-full block"
            name="password"
            onChange={handleChange}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)} 
            className="text-white"
          >
            {showPassword ? (
              <AiFillEye className="text-2xl" />
            ) : (
              <AiFillEyeInvisible className="text-2xl" />
            )}
          </button>
        </div>

        <div className="flex flex-col space-y-3">
          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-white py-3 px-6 sm:px-4 text-blue-900 rounded-full"
            >
              {isRegistering ? "Registrarme" : "Iniciar Sesión"}
            </button>
            <button
              type="button"
              className="flex items-center bg-white py-3 px-2 text-blue-900 rounded-full"
              onClick={googleLogin}
            >
              <FcGoogle className="text-3xl mr-2" />
              Iniciar sesión con Google
            </button>
          </div>
          <button
            type="button"
            className="bg-white py-3 px-6 text-blue-900 rounded-full"
            onClick={() => setIsRegistering(!isRegistering)}
          >
            {isRegistering ? "Ya tengo cuenta, iniciar sesión" : "No tengo cuenta, registrarme"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
