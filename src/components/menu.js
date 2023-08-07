
import React, { useState } from 'react';
import Breakfast from './Breakfast';
import Lunch from './Lunch';
import Dinner from './Dinner';
import record from './data';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  return (
    <>
          <h1 style={{ textAlign: 'center', fontSize: '80px', fontFamily: 'curvive', margin: '20px auto' }}> Menu</h1>

      <div className='contanier'>
        <div className='row'>
          <div className='w-33'>
            <div className='round'>
              <h1 style={{ textAlign: 'center', margin: '10px 0px' }}>Breakfast</h1>
              <img src='./images/istockphoto-938158500-612x612.jpg' alt='Breakfast'></img>
              <button onClick={() => handleCategoryClick('Breakfast')} style={{ width: '80%', margin: '10px 30px', fontSize: '30px', backgroundColor: 'black', color: 'white', padding: '14px 50px', borderRadius: '25px' }}>
                Click
              </button>
            </div>
          </div>
      
          <div className='w-33'>
            <div className='round'>
              <h1 style={{ textAlign: 'center', margin: '10px 0px' }}>Lunch</h1>
              <img src='./images/screenshot_20201117092628__01__L.jpg' alt='Lunch'></img>
              <button  onClick={() => handleCategoryClick('Lunch')}    style={{ width: '80%', margin: '10px 30px', fontSize: '30px', backgroundColor: 'black', color: 'white', padding: '14px 50px', borderRadius: '25px' }} >
                Click
              </button>
            </div>
          </div>
          <div className='w-33'>
            <div className='round'>
              <h1 style={{ textAlign: 'center', margin: '10px 0px' }}>Dinner</h1>
              <img src='./images/pexels-photo-941869.jpeg' alt='Dinner'></img>
              <button  onClick={() => handleCategoryClick('Dinner')}  style={{ width: '80%', margin: '10px 30px', fontSize: '30px', backgroundColor: 'black', color: 'white', padding: '14px 50px', borderRadius: '25px' }}  >
                Click
              </button>
            </div>
          </div>
  
        </div>
      </div>



      {selectedCategory === 'Breakfast' && <Breakfast items={record.filter(item => item.category === 'Breakfast')} />}
      {selectedCategory === 'Lunch' && <Lunch items={record.filter(item => item.category === 'Lunch')} />}
      {selectedCategory === 'Dinner' && <Dinner items={record.filter(item => item.category === 'Dinner')} />}
    </>
  );
};

export default Menu;
