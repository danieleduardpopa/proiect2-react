import React, { useState, useEffect } from 'react';
import Layout from '../../components/Layout/Layout';
import HomeCategory from '../../components/HomeCategory/HomeCategory';
import products from '../../utils/products.json';


function Home() {
    const [categories, setCategories] = useState([]);
    const [categoryNames, setCategoryNames] = useState([]);
    

    useEffect(() => {
        
        setCategories(Object.values(products));
        setCategoryNames(Object.keys(products));
        
    }, []);
   
    return (
        <Layout>
            
                <div className="container container-min-max-width">
                    <div className="row">
                        {
                            categories.map((category, index) => {
                                return (
                                    <HomeCategory
                                        key={index}
                                        image={category.image}
                                        title={category.name}
                                        description={category.description}
                                        routeName={categoryNames[index]}
                                    />
                                )
                            })
                        }
                    </div>
                </div>

            
        </Layout>
    )

}



export default Home
