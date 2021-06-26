import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {getAllUsers } from '../Redux/actions'

import MenuAdm from './MenuAdm'



function Admin() {
  const order = useSelector(state => state.orders);

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllUsers());
  }, [])

  return (

    <div className="spacer">
      
      <MenuAdm />
      <div className="funciones-adm">
        <h3>Funciones de administrador</h3>
      </div>
    </div>
  )
}

export default Admin