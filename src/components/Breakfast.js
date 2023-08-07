// BreakfastMenu.js
import React from 'react';


const Breakfast = ({ items }) => {
    return (
      <>
          <center>
            {items.map((item, index) => (
                <div   key={{ index }}  style={{display :'inline-block'}}>
                   <div style={{margin:'20px 0px ',justifyContent :'center' }}>
                        <div className='w-331' >
                            <div className='round2'>
                               
                                <img src={item.image} alt='Breakfast'/>
                                <h1 style={{ textAlign: 'center', margin: '10px 0px' }}>{item.name}</h1>
                                <p style={{ textAlign: 'center', margin: '10px 0px',fontSize :'20px',fontWeight :'500' }}>Category: {item.category}</p>
                               <p style={{ textAlign: 'center', margin: '10px 0px' ,fontSize :'20px',fontWeight :'500'}}>Price: {item.price}</p>
                            </div>
                        </div>
                  </div>
                </div>
          
            ))}

        </center>
      </>

    );
};

export default Breakfast;
