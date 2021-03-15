import React, { useEffect, useState } from "react"
import ItemCount from "../components/ItemCount";


const ItemListContainer = ( {greeting} ) => {

    const [contador, setContador] = useState(1)

    const onAdd = (stock) => {
        if (contador < stock) {
            setContador(contador + 1);
        } else if (contador == stock) {
            alert("No hay mas stock del producto");
        };
    };

    const onSubstract = () => {
        if (contador > 1) {
            setContador(contador - 1);
        } 
    };

    return (
        <>
            <h2>{greeting}</h2>
            <ItemCount stock={5} contador={contador} onAdd={onAdd} onSubstract={onSubstract} />
        </>
    )
};

export default ItemListContainer;