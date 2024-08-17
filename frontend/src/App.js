import './App.css';
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './components/Card/Card';
import { FaArrowRightLong } from "react-icons/fa6";
function App() {
const [Cards, setCards] =useState([]);
const [Loading, setLoading] = useState(true);
const [searchTerm, setSearchTerm] = useState('');

useEffect(()=>{
  axios.get('http://localhost:1000/api/get-cards')
  .then(response => {
      setCards(response.data.cards);
      console.log(Cards)
      setLoading(false);
  })
  .catch(error => {
       console.log(error)
      setLoading(false);
  });
},[])


const handleSearch = () => {
  setLoading(true);
  const trimmedSearchTerm = searchTerm.trim();
  axios.get(`http://localhost:1000/api/get-card/${trimmedSearchTerm}`)
      .then(response => {
          setCards(response.data.searchedCard || []);
          setLoading(false);
      })
      .catch(error => {
          console.log(error);
          setLoading(false);
      });
};

if(Loading){
  return <p>Loading...</p>
}
  return (
    <div className='app-container'>
      <div className='app-head'>
        <Header/>
      </div>
      <div className='app-search-container'>
        <p>How can we help?</p>
        <input type='text' placeholder='search'
        value={searchTerm} 
        onChange={(e) => setSearchTerm(e.target.value)} 
        />
        <FaArrowRightLong onClick={handleSearch}
        className='icon'/>
      </div>
      <div className='app-display'>
        {
          Cards.map((item,index)=>{
            return <Card item ={item} key = {index} index = {index}/>
          })
        }
      </div>
      <div className='app-footer'>
        <Footer/>
      </div>
    </div>
  );
}

export default App;
