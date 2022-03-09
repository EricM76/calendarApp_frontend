import React from 'react'

export const Login = () => {
    return (
        <div className='container login-container'>
            <div className='row'>
                <div className='col-md-6 login-form-1'>
                    <h3>Login</h3>
                    <form>
                        <div className='mb-2'>
                            <input
                                type="text"
                                className={`form-control `}
                                placeholder='Email'
                                name='loginEmail'
                                autoComplete='off'
                            />
                            <span className='small text-danger ps-2'>
                            </span>
                        </div>
                        <div className='mb-2'>
                            <input
                                type="password"
                                className={`form-control `}
                                placeholder='Contraseña'
                                name='loginPassword'
                            />
                            <span className='small text-danger ps-2'>
                            </span>
                        </div>
                        <div className='mb-2'>
                            <input
                                type="submit"
                                className='btnSubmit'
                                value="Login"
                            />
                        </div>
                    </form>
                </div>
                <div className='col-md-6 login-form-2'>
                    <h3>Register</h3>
                    <form>
                        <div className='mb-2'>
                            <input
                                type="text"
                                className={`form-control `}
                                placeholder='Nombre'
                                name='registerName'
                            />
                            <span className='small text-danger ps-2'>
                            </span>
                        </div>
                        <div className='mb-2'>
                            <input
                                type="text"
                                className={`form-control `}
                                placeholder='Email'
                                name='registerEmail'
                            />
                            <span className='small text-danger ps-2'>
                            </span>
                        </div>
                        <div className='mb-2'>
                            <input
                                type="text"
                                className={`form-control`}
                                placeholder='Contraseña'
                                name='registerPassword'
                            />
                            <span className='small text-danger ps-2'>
                            </span>
                        </div>
                        <div className='mb-2'>
                            <input
                                type="submit"
                                className='btnSubmit'
                                value="Crear cuenta"
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
