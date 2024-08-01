import React, { useEffect, useState} from "react";
import {Form, Button, Checkbox} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css'
import axios  from "axios";


export default function Update(){
    const [code, setCode] = useState('');
    const [name, setName] = useState('');
    const [id, setID]     = useState(null);
    console.log("RECORD CODE " +code);
    console.log("RECORD NAME " +name);
    console.log("RECORD UPDATE " +id);

    const aux = 'https://cors-anywhere.herokuapp.com/';
    const myip = 'http://40.75.120.104/apiweb/';
    
    const sendDataToApi = ()=> {
        axios.put(aux+myip,{
            code,
            name,
            id 
        })
    }

    useEffect(() =>{
        setCode(localStorage.getItem('CODE'));
        setName(localStorage.getItem('NAME'));
        setID(localStorage.getItem('ID'));
    }, [])

    return(
        <div>
          <Form>
            <Form.Field>
              <label>Codigo</label>
              <input name="code"
                value={code}
                onChange={(e) => setCode(e.target.value)} 
                placeholder='Codigo' />
            </Form.Field>
            <Form.Field>
              <label>Nombre</label>
              <input name="name"
                value={name}
                onChange={(e) => setName(e.target.value)} 
                placeholder='Nombre' />
            </Form.Field>
            <Button type='submit' onClick={sendDataToApi}>Actualizar</Button>
          </Form>
        </div>
    )
}