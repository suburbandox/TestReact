import Papa from "papaparse"
import { useEffect } from "react"
import food from "./foodlist2.csv"
import Card from "./Card"
import Color from "./Color.csv"
import Pets from "./Pet"




var words;

function loadWords(arr) {
    words = arr;
    //console.log(words[0])
    //console.log(words)
    //console.log(words.length)
    //console.log(words[0].length)
    //console.log(words)

    //recipes()
}
var b;
function loadData() {
    const list = 
    Papa.parse(food, {
        download: true,
        delimiter:",",
        header:true,
        
        complete: function(results) {
            MakeCard(results.data);
            // b =results.data
            //b= results.data
            //console.log(results.data)
        }
    });
 
}
// window.addEventListener("load", loadData);
// function recipes(){
//     //$("#show").html("Showing "+words.length+" recipe"+(words.length==1?"":"s"))
//     words.forEach(row);
// }
// function row(item, index){
//     //console.log(words[index][0])
//     //console.log("a")
//     if(index >0){
//         console.log("a")

    
//     }
//     //index.forEach(columns)
// }
// function columns(index){

// }
function MakeCard(arr){
    
    //loadData();
    //A()
    //body.push(csv)
    // if (b === null) {
    //     console.log("red")
    // }
    // else{console.log("blue")}
    //console.log(b)
    //console.log(arr)
    //let m =arr
    
    // const l =arr.forEach(element => 
    //     console.log(element.Dish)
    //     <div>
    //         <h2>{element}</h2>
    //     </div>
    // )
    //{
        
        

        // return(
    // <div>
    //     <h1>test</h1>
    // </div>
// )
        //console.log(element.name)
    //});
    //body.map
    // return arr.map(card=>
    //     <Card
    //         dish={card.Dish}
    //         cuisine={card.Cuisine}
    //         key={card.Dish}
    //     />
    // )
// return(
//     <div>
//         <h1>test</h1>
//     </div>
// )
// )
}

export default loadData;