import React, {useEffect, useState} from 'react'
import ReactDOM from 'react-dom'
import './App.css'
import api from './api'

import Contacts from './components/basic/Contacts'
import ListContacts from './components/basic/listContacts'

export default () => {
const [contacts, setContacts] = useState([])

useEffect(() => {
    api.get('/contacts')
        .then (response => {
            console.log(response.data.data)
            setContacts(response.data.data)
        })
} , []);


return (
        <div className="App">
            <div className="pageTitle"><h1> React + NodeJs + Sequelize + Express Study </h1></div>
            <Contacts/>

            <ListContacts contacts={contacts}/>

        </div>
    )
}
