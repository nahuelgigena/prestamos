import React from 'react';

const Resultado = ({total , plazo , cantidad}) => (
    
        <div className = "u-full-width resultado container ">
            <h2>Resumen </h2>
            <p>La cantidad solicitada es : $ {cantidad}</p>
            <p>A Pagar en: {plazo} Meses</p>
            <p>Su pago Mensual es de: $ { (total / plazo).toFixed(2) } </p>
            <p>Total a Pagar: $ {(total).toFixed(2)}</p>

        </div>
        );

 
export default Resultado;