import { useForm } from 'react-hook-form';
import { registerRequest } from '../api/user.js'

function RegisterPage() {
    const { register, handleSubmit } = useForm();
    return (
        <div className='container py-3'>
            <form
                onSubmit={handleSubmit(async (values) => {
                    console.log(values);
                    const res = await registerRequest(values)
                    console.log(res)
                })}
            >
                <label htmlFor="userFirstName">Nombre
                    <input type="text" id="userFirstName" {...register("userFirstName", { required: true })} />
                </label><br />
                <label htmlFor="userLastName">Apellido
                    <input type="text" {...register("userLastName", { required: true })} />
                </label><br />
                <label htmlFor="userEmail">Correo Electrónico
                    <input type="email" {...register("userEmail", { required: true })} />
                </label><br />
                <label htmlFor="userPassword">Contraseña
                    <input type="password" {...register("userPassword", { required: true })} />
                </label> <br />
                <label htmlFor="userPasswordConfirmation">Repetir Contraseña
                    <input type="password" {...register("userPasswordConfirmation", { required: true })} />
                </label><br />
                <button type="submit" className='btn btn-success m-2'>Crear Usuario </button>
            </form>
        </div>
    )

}


export default RegisterPage;