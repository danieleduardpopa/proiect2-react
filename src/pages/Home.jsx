import React, { useState, useEffect } from 'react';
import Layout from '../components/Layout';
import HomeCategory from '../components/HomeCategory';
import products from '../utils/products.json';


// class Home extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state={
//             categories: [],
//             categoryNames: []
//         };
//     }

//     componentDidMount() {
//         const categories = Object.values(products);
//         const categoryNames = Object.keys(products);
//         this.setState({categories, categoryNames});
//     }
    
//     render() {
//         console.log(this.state.categoryNames);
//         return (
//             <div>
//                 <Layout>
//                     <div className="container">
//                         <div className="row">
//                             {
//                                 this.state.categories.map((category, index) => {
//                                     return (
//                                         <HomeCategory
//                                             key={index}
//                                             image={category.image}
//                                             title={category.name}
//                                             description={category.description}
//                                             categoryName={this.state.categoryNames[index]}
//                                         />
//                                     )
//                                 })
//                             }
//                         </div>
//                     </div>

//                 </Layout>
//             </div>
//         )
//     }
// }

function Home() {
    const [categories, setCategories] = useState([]);
    const [categoryNames, setCategoryNames] = useState([]);
    console.log(Object.keys(products));

    useEffect(() => {
        console.log("useeffect is up");
        setCategories(Object.values(products));
        setCategoryNames(Object.keys(products));
        
    }, []);
   
    return (
        <div>
            <Layout>
                <div className="container">
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
        </div>
    )

}



export default Home
