import Personcard from "./Personcard";

function Peoplearea({thePropThatHoldsAllThePeople, thePropWithTheDeleteFunction, thePropWithTheEditFunction}){
    // console.log(thePropThatHoldsAllThePeople)
    const peopleCards = thePropThatHoldsAllThePeople.map(function(personData){
        return(<Personcard key={personData.id} personObject={personData} thePropWithTheDeleteFunction={thePropWithTheDeleteFunction} thePropWithTheEditFunction={thePropWithTheEditFunction}/>)
    })
    return(
        <div>
            <h2>Thesee are the connections I want to track.</h2>
            {peopleCards}
        </div>
    )
}

export default Peoplearea;