import Addperson from "./Components/Addperson";
import Peoplearea from "./Components/Peoplearea";
import { useState } from 'react';

function App(){
    const [count, setCount] = useState(0);
    const [allThePeople, setAllThePeople] = useState([]);

    function GetThePerson(person){
        setAllThePeople([...allThePeople, {id:count, theName:person}]);
        setCount(count + 1);
        // console.log(person)
    }
    function DeleteThePerson(id){
        const theNewPeopleList = allThePeople.filter(function(person){
            return(person.id !== id);
        })
        setAllThePeople(theNewPeopleList);
    }
    function EditThePerson(id, theNewName){
        // console.log("Changing " + id + "to" + theNewName);
        const theNewPeopleList = allThePeople.map(function(person){
            if(person.id === id){
                return {...person, theName:theNewName}
            }
            else{
                return person;
            }
        })
        setAllThePeople(theNewPeopleList);
    }
    return(
        <div>
            <Addperson thePropWithTheAddFunction={GetThePerson}/>
            <Peoplearea thePropThatHoldsAllThePeople={allThePeople} thePropWithTheDeleteFunction={DeleteThePerson} thePropWithTheEditFunction={EditThePerson} />
        </div>
    )
}

export default App;