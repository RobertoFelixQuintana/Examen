import React from 'react'


const Movies = (props) => {
    return (
        <div className="peliculasContainer">
        <h2 style={{textAlign:'center'}}>Cartelera</h2>
          {
            props.cartelera.map((peli,index)=>{
              return (
                 <div className="PeliLista" key={index}>
                
                    <div  className="Poster">
                      <img width='75%' src={peli.url} alt={peli.nombre} />
                    </div>
                    
                    <div className="Descripcion">
                        <p><strong>{peli.nombre}</strong></p>
                        <p><strong>{peli.idioma}</strong></p>
                        <p><strong>{peli.clasificacion}</strong></p>
                        <p><strong>{peli.duracion}</strong></p>
                        <div className="Horarios">
                          {peli.horarios.map((horario,index)=><button className="btnCartelera" key={index} onClick={()=>props.agregar(peli,horario)}>{horario}</button>)}
                        </div>
                    </div>
                  </div>)
           
            })
          }
      
    </div>
    )
}
export default Movies;
