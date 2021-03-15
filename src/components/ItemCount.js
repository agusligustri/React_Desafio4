import 'bootstrap/dist/css/bootstrap.min.css'

/* const ItemCount = ({stock, onSubstract, onAdd, contador}) => {
    return (
        <>
            <button className="btn btn-secondary" onClick={ () => {onSubstract()}}>-</button>
            <b>{`   ${contador}   ` }</b>
            <button className="btn btn-secondary" onClick={ () => {onAdd(stock)}}>+</button>

            <div>
                <button>Comprar</button>
            </div>
        </>
    );
}; */


const ItemCount = ({stock, contador, onAdd, onSubstract}) => {
    return (
        <>
            <p>Stock: {stock} </p>
            <div className="input-group" style={{ width: '20%' }}>
                <div className="input-group-prepend">
                <button type="button" onClick={ () => {onSubstract()}} className="btn btn-outline-primary input-group-text"> - </button>
                </div>
                <input type="text" placeholder={contador} className="form-control"></input>
                <div className="input-group-append">
                    <button type="button" onClick={ () => {onAdd(stock)}}  className="btn btn-outline-primary input-group-text"> + </button>
                </div>
            </div>

            <div>
                <button type="button" className="btn btn-primary mt-2" style={{ width: '20%' }}>Agregar al Carrito</button>
            </div>
        </>
    );
  }
  
  export default ItemCount;