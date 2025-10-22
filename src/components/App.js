
import React,{useState, useEffect} from "react";
import './../styles/App.css';

const App = () => {
const [products, setProducts] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState(null);

useEffect(() => {
    const fatchData = async()=>{
        try {
            const responce = await fetch('https://dummyjson.com/products');
            if (!responce.ok) 
                throw new Error('Network response was not ok');
            const data = await responce.json();
            setProducts(data.products);
        } catch (error) {
            setError(error.message);
        }finally {
            setLoading(false);
        }
    }
fatchData();
}, []);
  return (
      {/* Do not remove the main div */}
<div className="p-4">
      <h2 className="text-xl font-bold mb-4 text-center">Fetched Products</h2>
      <ul className="grid gap-4 md:grid-cols-3 sm:grid-cols-2">
        {products.map((item) => (
          <li
            key={item.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img
              src={item.thumbnail}
              alt={item.title}
              className="w-full h-40 object-cover rounded-md mb-2"
            />
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.category}</p>
            <p className="font-bold mt-2">${item.price}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
export default App
