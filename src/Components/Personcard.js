import Editperson from "./Editperson";
import { useState } from 'react';

function Personcard({personObject, thePropWithTheDeleteFunction, thePropWithTheEditFunction}){
    const [editClicked, setEditClicked] = useState(false);
    function onDeleteClick(){
        thePropWithTheDeleteFunction(personObject.id);
    }
    function onEditClick(){
        setEditClicked(!editClicked);
    }
    function whenSavedWasClicked(theNeededName){
        thePropWithTheEditFunction(personObject.id, theNeededName);
        onEditClick();
    }
    let theContent = (<h3>{personObject.theName}</h3>)
    if(editClicked){
        theContent = (<Editperson 
            thePropThatHoldsTheName={personObject.theName} 
            thePropThatHoldsTheFunctionIfWeClickSave={whenSavedWasClicked}/>)
    }
    return(
        <div>
            {theContent}
            <button onClick={onDeleteClick}>Delete</button>
            <button onClick={onEditClick}>Edit</button>
            {/* <Editperson/> */}
        </div>
    )
}

export default Personcard;