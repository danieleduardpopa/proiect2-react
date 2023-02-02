import React, {useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import Layout from '../components/Layout';
import products from '../utils/products.json';
import ProductList from '../components/ProductList';
import BaseListSidebar from '../components/BaseListSidebar';


function Category() {
    
    const [category, setCategory] = useState({});
    const [items, setItems] = useState([]);
    const {categoryName} = useParams();
    const [prices, setPrices ] = useState([]);
    const [filteredItems, setFilteredItems] = useState([])


    useEffect(() => {
        
        setCategory(  products[categoryName]);
        setItems( products[categoryName].items);
        setFilteredItems(products[categoryName].items)
        setPrices(products[categoryName].items.map(item => item.price))
    }, []);
        
    
    const priceMin = Math.min(...prices);
    const priceMAx = Math.max(...prices);
    const increment = Math.ceil((Math.max(...prices) - Math.min(...prices))/3);
    
    const range1 = [priceMin, priceMin+increment-1];
    const range2 = [priceMin+increment, priceMin+2*increment-1];
    const range3 = [priceMin+2*increment, priceMAx];
    const range = {range1, range2, range3};
    
    const currency = products[categoryName].items[0].currency;
    

    function handleRangeChange(rangeNumber) {
        
        if (rangeNumber === 0) {
            setFilteredItems(items);
        } else {
            setFilteredItems(category.items.filter(
                item => item.price >= range[`range${rangeNumber}`][0] 
                            && 
                        item.price <= range[`range${rangeNumber}`][1]
            ));  
                
        }
    };

    
        return (
            <Layout >
                <div className="container container-min-max-width">
                    <div className='row' >
                        <div className='col-md-3 col-6'>
                            <BaseListSidebar 
                                onRangeChange={handleRangeChange}
                                range1={range1} 
                                range2={range2}
                                range3={range3}
                                currency={currency}
                            />
                        </div>
                        <div className='col-md-9 col-6'>
                            <div className='container'>
                                    <h2>{category.name}</h2>
                                    <ProductList products={filteredItems} />
                            </div>

                        </div>

                    </div>
                    
                </div>
            </Layout>
        )
    
}

export default Category;
