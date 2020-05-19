import React from 'react'
import './listContacts.css'



const ListContacts =  ({contacts}) => {
    return (
        <div id = "tableDiv">
        {console.log('eu sou o console.log', contacts)}
            <table className="table">
                <thead className="table-light">
                    <tr>
                        <th scope="col"> # </th>
                        <th scope="col"> Name </th>
                        <th scope="col"> Last Name </th>
                        <th scope="col"> Phone </th>
                        <th scope="col"> Phone 2 </th>
                        <th scope="col">  </th>
                    </tr>
                </thead>
                <tbody>
                {contacts.map(contact => (
                    <tr>
                        <td>{contact.id}</td>
                        <td>{contact.name}</td>
                        <td>{contact.lastName}</td>
                        <td>{contact.phone}</td>
                        <td>{contact.phone2}</td>
                        <td>{}</td>
                    </tr>
                    
                    ))}
                </tbody>
            </table>
        </div>

    )
}
export default ListContacts