import { useContext, useEffect, useState } from "react"
import "./CardComponent.css"
import { CartContext } from "../../context/CartContext";

export const CardComponent = ({id, image, title, description, price, handleAdd, handleRemove}) => {

    const {shoppingList} = useContext(CartContext);


    const [added, setAdded] = useState(false);

    const stateProduct = () =>{
        if(added){
            handleRemove();
            setAdded(false);
        }else{
            handleAdd();
            setAdded(true);
        }
    }

    const checkAdded = ()=>{
        const boolean = shoppingList.some(product => product.id == id);
        setAdded(boolean);
    }

    useEffect(()=>{
        checkAdded();
    },[]);

    return (
    <div className="card">
        <img src={image} alt={title} className="card-img"/>
        <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <p className="card-price">${price}</p>

        {
            added
            ? <button type="button" className="remove-btn" onClick={stateProduct}> Quitar del Carrito</button>
            : <button type="button" className="add-btn" onClick={stateProduct}>Agregar al Carrito</button>
        }
        </div>
    </div>
    )
}
