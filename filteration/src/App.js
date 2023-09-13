import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  const [filter, setFilter] = useState("");


  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  
  let item = [
    {
      id: 1,
      image: "https://www.layers.shop/cdn/shop/products/iphone-14-pro-max-before-sunset--back.jpg?v=1692694463&width=1080",
      name: "iPhone 14 Pro Max",
      price: 149999,
      company: "apple",
    },
    {
      id: 2,
      image: "https://www.layers.shop/cdn/shop/files/samsung-galaxy-s23-ultra-cyberhud--back.jpg?v=1688967338&width=1080",
      name: "Samsung Galaxy S23 Ultra",
      price: 140999,
      company: "samsung",
    },
    {
      id: 3,
      image: "https://www.layers.shop/cdn/shop/files/oneplus-nord-ce-3-lite-megatronics--back.jpg?v=1688717621&width=1080",
      name: "Oneplus Nord Ce 3 Lite",
      price: 19999,
      company: "oneplus",
    },
    {
      id: 4,
      image: "https://www.layers.shop/cdn/shop/products/google-pixel-7-pro-purple-river--back.jpg?v=1692276766&width=1080",
      name: "Google Pixel 7 Pro",
      price: 70999,
      company: "google",
    },
    {
      id: 5,
      image: "https://www.layers.shop/cdn/shop/files/nothing-phone-2-jedi-attack--back.jpg?v=1689076170&width=1080",
      name: "Nothing Phone 2",
      price: 44999,
      company: "nothing",
    },
    {
      id: 6,
      image: "https://www.layers.shop/cdn/shop/products/iphone-14-plus-concrete-rock--back.jpg?v=1675492114&width=1080",
      name: "iPhone 14 Plus",
      price: 76990,
      company: "apple",
    },
    {
      id: 7,
      image: "https://www.layers.shop/cdn/shop/products/samsung-galaxy-s23-plus-wolfgang--back.jpg?v=1677077150&width=1080",
      name: "Samsung Galaxy S23 Plus",
      price: 94999,
      company: "samsung",
    },
    {
      id: 8,
      image: "https://www.layers.shop/cdn/shop/products/oneplus-11-darth-vader--back.jpg?v=1685786407&width=1080",
      name: "OnePlus 11 5G",
      price: 56999,
      company: "oneplus",
    },
    {
      id: 9,
      image: "https://www.layers.shop/cdn/shop/products/google-pixel-6-thor-attack--back.jpg?v=1676486931&width=1080",
      name: "Google Pixel 6",
      price: 47999,
      company: "google",
    },
    {
      id: 10,
      image: "https://www.layers.shop/cdn/shop/products/nothing-phone-1-ciudad--back_ae22a811-5159-49de-a54a-e78a8df77606.jpg?v=1675336348&width=1080",
      name: "Nothing Phone 1",
      price: 28999,
      company: "nothing",
    },
  ]
  
  const filteredItems = item.filter((item) => 
    item.company.includes(filter));
  
  return (
    <>
      <div className='container'>
        <label htmlFor="filter" >Enter Company Name :</label><br />
        <input type='text' id='filter' value={filter} onChange={handleFilterChange} placeholder='Enter company name' />
        <div className='row d-flex'>

          {filteredItems.map((item) => (
              (  
              <div className='col-lg-3 my-5 mx-5'>
                <div className="card" >
                  <img src={item.image} height={320} width={200} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <p className="card-text"> <strong>COMPANY : {item.company}</strong> </p>
                    <p className="card-text"><strong>PRICE : ₹ {item.price}</strong></p>
                    <a href="#" className="btn btn-primary">Add to cart</a>
                  </div>
                </div>
              </div>
            )
            ))}
            </div>
        
          
        
      </div>
    </>
  );
}

export default App;
