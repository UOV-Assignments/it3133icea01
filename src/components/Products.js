
import '../assets/CSS/layout.css';
import Product from './Product';
import flowers from './FlowerDB'
import {useState} from 'react'

export default function Products(){
    const [items, setItems] = useState([]);
  
    const addToCart = (item)=>{
        setItems([...items, item]);
        
    } 
    console.log(items)
    return(
        <>
            <div className="item1">
                <h1>Flower Shop</h1>
            </div>
            <div className="item2">
                <h4 className="card-title">Buy flowers</h4>
                <div className="grid-container">
                    {
                        flowers.map((flower)=>
                            <Product data ={flower} cart={addToCart} />
                        )
                    }
                </div>

            </div>
            <div className="item3">
                {
                //cart
                }
            </div>
        </>
    );

}