import React from 'react';

export const Navbar = () => {
  return (
    <div className='container-fluid'>
        <nav className='navbar navbar-dark bg-dark mb-4 px-4'>
            <span className='navbar-brand'>
                Eric
            </span>
            <button
                className='btn btn-outline-light border-0'   
            >
                <i className="fas fa-sign-out-alt"></i>
                <span> Salir</span>
            </button>
        </nav>

    </div>
  )
}
