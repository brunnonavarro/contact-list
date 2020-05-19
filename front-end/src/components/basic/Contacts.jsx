import React from 'react'
import './Contacts.css'
import '../../api.js'
import api from '../../api.js'

//function onSave() {
//    api.post('/contacts', {
//        name: ,
//        lastName: ,
//        phone: ,
//        phone2: 
//    })
//        .then ()
//}

export default props => {
    return (
        <div>
            <form>
                <div className = "form-row">
                    <div className = "form-group col-md-6">
                        <label for="nameContact">Name</label>
                        <input type="text" className="form-control" id="nameContact" placeholder="Ex. John"/>
                    </div>

                    <div className="form-group col-md-6">
                        <label for="nameContact">Last name</label>
                        <input type="text" className="form-control" id="lastNameContact" placeholder="Ex. Cena"/>
                    </div>
                </div>

                <div className="form-row">
                    <div class="form-group col-md-6">
                        <label for="nameContact">Phone</label>
                        <input type="number" className="form-control" id="phoneContact" placeholder="(17) 98100-8100"/>
                    </div>

                    <div class="form-group col-md-6">
                        <label for="nameContact">Phone</label>
                        <input type="number" className="form-control" id="phoneContact" placeholder="(17) 98100-8100"/>
                    </div>
                </div>
            </form>
            <div id="btnSave">
                <button type="button" className="btn btn-success" onClick={onSave()}> Save </button>
            </div>
        </div>

    )
}