//Use stat -> Identify and display what a user has typed at every step along the way.
import { useState } from 'react';

function Addperson({thePropWithTheAddFunction}){
    const [addedPerson, setAddedPerson] = useState('');
    function onInputChange(event){
        setAddedPerson(event.target.value);
    }

    function onFormSubmit(event){
    event.preventDefault();
    thePropWithTheAddFunction(addedPerson);
    setAddedPerson('');

    }
    return(
        <form onSubmit={onFormSubmit}>
            <input onChange={onInputChange} value={addedPerson}/>
            <button>Add a Person</button>
        </form>
    )
}

export default Addperson;