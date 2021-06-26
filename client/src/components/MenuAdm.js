import React from 'react';

import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";


function MenuAdm() {

    return (

        <div className="container-menu">
            <div className="cont-menu">
                <nav >
                    
                    <Link to="/admin/listaDeOrdenes" className="ruta-adm"> Lista de órdenes </Link>
                    <Link to="/admin/EditCatalog" className="ruta-adm"> Editar producto </Link>
                    <Link to="/admin/EditCategory" className="ruta-adm"> Editar categorías </Link>
                    <Link to="/admin/EditUser" className="ruta-adm"> Editar usuario </Link>
                    <Link to="/admin/FormProducto" className="ruta-adm"> Añadir un producto </Link>
                    <Link to="/admin/FormCategorias" className="ruta-adm"> Añadir una categoría </Link>
                    
                </nav>
            </div>
        </div>

    )
}

export default MenuAdm