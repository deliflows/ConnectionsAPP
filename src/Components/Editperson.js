import { useState } from 'react';

function Editperson({thePropThatHoldsTheName, thePropThatHoldsTheFunctionIfWeClickSave}){
    const [editPerson, setEditPerson] = useState(thePropThatHoldsTheName);
    function onInputChange(event){  
        setEditPerson(event.target.value);
    }
    function onFormSubmit(event){
        event.preventDefault();
        thePropThatHoldsTheFunctionIfWeClickSave(editPerson)
    }
    return(
        <form onSubmit={onFormSubmit}>
            <input onChange={onInputChange} value={editPerson}/>
            <button>Save</button>
        </form>
    )
}

export default Editperson;