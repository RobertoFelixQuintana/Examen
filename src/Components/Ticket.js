import React from 'react'

const Ticket = (props) => {
    return (
        <div className="listaContainer">
          {
            Object.keys(props.compra).length!==0
           ?
            <div>
                <h2 style={{textAlign:'center'}}>Compra</h2>
                <div className="Ticket">
                  <p><strong>{props.compra.nombre}</strong> ({props.compra.idioma})</p>
                  <p><strong>Hora: </strong>{props.compra.horario}</p>
                  <p><strong>Cantidad: </strong><input className="inputCantidad" type='number' value={props.compra.cantidad} min="1" max="33" onChange={e=>props.calcular(e.target.value,props.compra)}/></p>
                  <p><strong>Total: </strong>${(props.compra.total).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,')}</p>
                  <div className="botones">
                    <button className="btnLista rojo" onClick={()=>props.eliminarCompra()}>Cancelar</button> 
                    <button className="btnLista verde" onClick={()=>props.comprar(props.compra)}>Comprar</button> 
                  </div>
                </div> 
            </div> 
            
            :
              <div>
                <p><strong>Selecciona una película dando click en su horario</strong></p>
              </div>

            }
          </div>
    )
}

export default Ticket;
