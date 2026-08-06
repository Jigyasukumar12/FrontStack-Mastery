
function StudentCard({ name , branch , year , cgpa , isPlaced}){
    return (
        <div>
            <h4>Name : {name}</h4>
            <p>Branch : {branch}</p>
            <p>Year : {year}</p>
            <p>cgpa : {cgpa}</p>
            <h6>Is Placed : {isPlaced ? "Placed ✅" : "Got placed into Goldman Sachs"}</h6>



        </div>
    )
}

export default StudentCard;