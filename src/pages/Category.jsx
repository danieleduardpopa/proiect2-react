import React from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';


function Category() {

    const {categoryName} = useParams();
        
 
        return (
            <div className='container'>
                <Layout>
                    <h1>{categoryName}</h1>
                </Layout>
            </div>
        )
    
}

export default Category;
