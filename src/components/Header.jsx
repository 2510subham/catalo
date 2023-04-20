import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import Catalogue from './Catalogue';

const Header = () => {
    const name = useSelector(state => state.name);
    const email = useSelector(state => state.email);
    const [category, setCategory] = useState([]);
    const [selectprod, setSelectProd] = useState('electronics');



    useEffect(() => {
        async function fetchData() {
            const res = await fetch("https://fakestoreapi.com/products/categories");
            const data = await res.json();
            setCategory(data);
        }

        fetchData();
    }, [])



    const handleClick = (e) => {
        setSelectProd(e.target.innerText);
    }


    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item mx-2">
                                <h5>{name.name}</h5>
                            </li>
                            <li className="nav-item mx-2 mt-1">
                                <h6>{email.email}</h6>
                            </li>
                        </ul>

                        <form className="d-flex" role="search">
                            <ul className='list-unstyled'>
                                <li className="nav-item dropdown ">
                                    <a className="nav-link dropdown-toggle mt-1" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        {selectprod ? selectprod : 'electronics'}
                                    </a>
                                    <ul className="dropdown-menu cursor-pointer">
                                        {
                                            category.map((item, key) => {
                                                return (
                                                    <li key={key} className="dropdown-item cursor-pointer" onClick={handleClick}>{item}</li>
                                                )
                                            })
                                        }
                                    </ul>
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </nav>

            <Catalogue product={selectprod} category={category} />

        </>
    )
}

export default Header