import React, { useState, useEffect } from 'react'
import PieChart from './PieChart';

const Catalogue = ({ product,category }) => {
    const [prod, setProduct] = useState([]);
    const [totalProd,settotalProd]=useState([]);


    console.log(product);
    useEffect(() => {
        async function fetchData1() {
            const res1 = await fetch(`https://fakestoreapi.com/products/category/${product}`);
            const data1 = await res1.json();
            // console.log(data1);
            setProduct(data1);
        }
        fetchData1();
    }, [product]);

    const showchart =async () => {
        const res=await fetch("https://fakestoreapi.com/products");
        const data1=await res.json();
        console.log(data1);
        settotalProd(data1);
        <PieChart label={category} data1={totalProd}/>

    }
    const data={
        labels:category,
        datasets:[
            {
                data:totalProd,
            }
        ]

    }
    return (
        <>
            <div className="container col md-3">
                <div className="row">

                    {
                        prod.map((item,keys) => {
                            return (
                                <div className='col md-3 mt-4' key={keys}>

                                    <div className="card" style={{ width: "18rem" }}>
                                        <img src={item.image} className="card-img-top" style={{ height: "15rem" }} alt="..." />
                                        <div className="card-body">
                                            <h5 className="card-title">{item.title}</h5>
                                            <p className="card-text">{item.description.length < 150 ? item.description.length : item.description.substr(0, 149)}<a href="#" >Read More</a></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        }
                        )
                    }
                    <div className="col-md-12 d-flex justify-content-end">
                        <button className="btn btn-primary btn-lg mb-4" onClick={showchart}>Analize</button>
                        
                        
                    </div>
                </div>
                
            </div>
            
        </>
    )
}

export default Catalogue;