import Pets from "./Pet"
const pets = [{
    name:"dog",
    Food:"chocolate"

},
{
    name:"cat",
    Food:"kibel"
},
{
    name:"mouse",
    Food:"cheese"
},
{
    name:"bear",
    Food:"meat"
}]
export default function Pet(){
    //console.log(typeof(pets))
    return pets.map(Pet=>
        <Pets
            name={Pet.name}
            key={Pet.name}
            food={Pet.Food}
        />
    )
}