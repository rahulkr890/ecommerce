import React, { useEffect, useState } from "react";
import '../styles/home.css';

function Home() {
    const [categoryList, setCategoryList] = useState([]);
    const [username, setUsername] = useState('');

    const logoutFn = () => {
        setUsername("");
        window.location.href = "/";
    }
    const categories = [
        { name: 'Mobiles', categoryId:1},
        { name: 'Laptop', categoryId:2},
        { name: 'HeadPhones', categoryId:3 },
      ];


    useEffect(() => {
        setUsername("User");
        setCategoryList(categories);
    }, []);

    return (
        <div id="homePage">
            <div id="header">
                <div className="container">
                    <div className="row">
                        <div className="header-wrapper d-flex justify-content-between">
                            <div className="logo d-inline-block">
                                <a className="text-decoration-none" href="/">Ecommerce</a>
                            </div>
                            <div className="user-actions d-flex flex-row">
                                <a className="text-decoration-none" href="/">Account</a>
                                <a className="text-decoration-none" href="/">Cart</a>
                                <div className="user-intro">Hi {username}</div>
                                <div className="logout-btn" onClick={logoutFn}>Logout</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h2 className="home-title text-center">Welcome to Ecommerce</h2>
                        <div className="category-list d-flex flex-row justify-content-center align-items-center">
                            <div className="category-item rounded-3 d-flex justify-content-center align-items-center">
                                <a className="text-decoration-none text-white" href="/">All Products</a>
                            </div>
                            {
                                categoryList.map((category) => (
                                    <div key={category.categoryId} className="category-item rounded-3 d-flex justify-content-center align-items-center">
                                        <a href="/" className="text-decoration-none text-white">{category.name}</a>
                                    </div>
                                ))
                            }
                        </div>
                        <div className="category-title text-center">Select a category to start shopping</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home;