import React from 'react'
import '../Pages/Home.css'

export function Home() {
  return (
    <>  
       
        <div style={{ display: "flex", width: "75%", flexDirection: 'column' }}>
                <div className='container'>
                    <div>
                    <button className='X'
                    onClick={() => {
                    ;
                    }}
                    >
               
                    X
                
                    </button>
                    </div>
                
                    <input className='a'
                    type="text" 
                    placeholder="Nama Lengkap" 
                    />

                    <input className='a'
                    type="text" 
                    placeholder="Alamat Lengkap " 
                    />
        
                    <input className='a'
                    type="text" 
                    placeholder="Nomor Telepon" 
                    />
                
                    <input className='a' 
                    type="text" 
                    placeholder="Alamat Email" 
                    />
         
                    <input className='a'
                    type="text" 
                    placeholder="Password" 
                    />
                <div>
                    <button className='div'
                        onClick={() => {
                            ;
                        }}
                    >
                       <span>
                        REGISTER
                        </span>
                    </button>
                </div>
            </div>   
       </div>
    </>
    
    
    )}            
