import { useState,useEffect } from 'react';
import { Button, TextField } from '@mui/material';
import './style.css';
import KeyboardBackspaceSharpIcon from '@mui/icons-material/KeyboardBackspaceSharp';
export default function Calculator() {
    var [result,setResult]=useState('');
    var [finalresult,setFinalresult]=useState('');
    console.log('types value is',result)
     useEffect(()=>{
        var a=document.getElementById('clear-button');
        
        a.addEventListener('click',()=>{
            setResult('');
            setFinalresult('');
        })
        
    },[])
    const clearfunctionality=()=>{
        let str=result.toString();
        console.log(str.substring(0,str.length -1))
        setResult(str.substring(0,str.length -1));
    }
    const squareroot=()=>{
        let root=Math.sqrt(result);
        setFinalresult(root)
    }
    const log=()=>{
        let logvalue=Math.log(result);
        setFinalresult(logvalue);
    }
    
    return(
       
        <div className="main-container">
            
            <div className='middle-container'>
            
                <TextField  value={result} style={{width:'100%',font:'30px'}}></TextField>
                <div className='result-space'>{finalresult}</div>
                <div className='inner-container'>
                    <div className='buttons-container'>
                    <Button id='clear-button'  style={{color:'blue',fontSize:'30px'}}>AC</Button>
                    
                    <Button onClick={clearfunctionality} style={{color:'black',fontSize:'30px'}}>
                         <KeyboardBackspaceSharpIcon style={{fontSize:'40px'}}/> 
                    </Button>
                    <Button onClick={()=>{setResult(result +'.')}} style={{color:'black',fontSize:'30px'}}>.</Button>
                    <Button onClick={()=>{setResult(result +'+')}} style={{color:'black',backgroundColor:'orange',borderRadius:'20px',fontSize:'30px'}}>+</Button>
                    <Button onClick={()=>{setResult(result +'1')}} style={{color:'black',fontSize:'30px'}}>1</Button>
                    <Button onClick={()=>{setResult(result +'2')}} style={{color:'black',fontSize:'30px'}}>2</Button>
                    <Button onClick={()=>{setResult(result +'3')}} style={{color:'black',fontSize:'30px'}}>3</Button>
                    <Button onClick={()=>{setResult(result +'-')}} style={{color:'black',backgroundColor:'orange',borderRadius:'20px',fontSize:'30px'}}>-</Button>

                    <Button onClick={()=>{setResult(result +'4')}} style={{color:'black',fontSize:'30px'}}>4</Button>
                    <Button onClick={()=>{setResult(result +'5')}} style={{color:'black',fontSize:'30px'}}>5</Button>
                    <Button onClick={()=>{setResult(result +'6')}} style={{color:'black',fontSize:'30px'}}>6</Button>
                    <Button onClick={()=>{setResult(result +'*')}} style={{color:'black',backgroundColor:'orange',borderRadius:'20px',fontSize:'30px'}}>×</Button>
                    <Button onClick={()=>{setResult(result +'7')}} style={{color:'black',fontSize:'30px'}}>7</Button>
                    <Button onClick={()=>{setResult(result +'8')}} style={{color:'black',fontSize:'30px'}}>8</Button>
                    <Button onClick={()=>{setResult(result +'9')}} style={{color:'black',fontSize:'30px'}}>9</Button>
                    <Button onClick={()=>{setResult(result +'/')}} style={{color:'black',backgroundColor:'orange',borderRadius:'20px',fontSize:'30px'}}>÷</Button>

                    <Button onClick={()=>{setResult(result +'0')}} style={{color:'black',fontSize:'30px'}}>0</Button>
                    <Button  onClick={squareroot}  style={{color:'black',fontSize:'30px'}}>√</Button>
                    <Button onClick={log} style={{color:'black',fontSize:'30px'}}>log</Button>
                    <Button onClick={()=>{setFinalresult(eval(result));
                        setResult(finalresult);
                        }} 
                    style={{color:'white',backgroundColor:'blue',fontSize:'30px',borderRadius:'50px'}}>=</Button>
                    
                    </div>
                </div>
            </div>
        </div>
    )
}