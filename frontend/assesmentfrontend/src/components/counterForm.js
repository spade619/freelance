import React, { useState, useEffect } from 'react';


const CounterForm = () => {
    const [numberState, setNumberState]= useState(0)
    const [data, setData] = useState({ key1: 0, key2: 'value2' });
    const [sampleOutput, setSampleOutput]= useState("")
    
    //api call for backend request to persist data 
    useEffect(() => {
        const fetchBackendRequest= async () => {
            const response = await fetch('http://localhost:3000/test/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
          });
    
            const json = await response.json()

         
            
            if(response.ok){
                console.log(json)
                setSampleOutput(json)
             
            }
        }
    
    
    //feth all campaigns
        fetchBackendRequest()
    }, [])
    




    const addNumber =() =>{
        setNumberState(numberState+1)
    }

    const decreaseNumber =() =>{
        setNumberState(numberState-1)
    }


    return <div className='mt-5'>
        <h1 className='text-danger mb-5'> Counter Form</h1> 

        {/* <h3 className='my-5 text-primary'>{numberState}</h3> */}
        <h3>{sampleOutput.numbers}</h3>
        <button className='me-3' onClick={()=> addNumber()}>increase</button>
        <button className='ms-3'onClick={()=> decreaseNumber() }>decrease</button>
    </div>;
}


export default CounterForm;