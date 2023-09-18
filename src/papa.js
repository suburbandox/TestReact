import Papa from "papaparse"
import { useEffect } from "react"
import food from "./foodlist2.csv"
import Card from "./Card"


var csv
function A(){
    var words;
    //let body=[];
    useEffect(() =>{
        
        const fetchParseData = async()=>{
            Papa.parse(food,{
                download: true,
                delimiter:",",
                header:true,
                complete:((results)=>{
                    //console.log(results.data)
                    //console.log(typeof(results.data))
                    //body.push(results.data)
                    //console.log(body)
                    //loadWords(results.data)
                    //console.log(typeof(results.data))
                    csv =results.data
                    words= results.data
                    MakeCard(results.data)
                    //csv = results.data
                    //return results.data
                    //num(results.data)
                    //console.log(words)


                })
            })
        }
        fetchParseData()
       

},[]) 
//return words
//return body
    // return words.map(card=>
    //     <Card
    //         dish={card.dish}
    //         key={card.dish}
    //     />
    // )
// return(
//     <div>
//         <h1>test</h1>
//     </div>
// )

}
//function loadWords(arr) {
    //words = arr;
    // ,
    // for (let i = 0; i < arr.length; i++) {
    //     Card(arr[0])
    //     //console.log(arr[0])
        
    // }
    //body = arr
    //body.splice(0,1)
    //console.log(arr)
    
    //return body.forEach(element =>  Card(element[0]));
    // body.forEach(function(){
    //     console.log("red")
    // });

    //body.forEach(element => console.log(element[0]));
    //console.log(typeof(body))
    //const j = JSON.stringify(header)
    //console.log(arr)
    //console.log(header)
    //console.log(typeof( arr[1][0]))
    // console.log(arr.length)
    //console.log(arr[0].length)
    // console.log(arr)
    // for (let i = 1; i < arr.length; i++) {//row
    //     //console.log(arr[i])
    //     for (let l = 0; l < arr[0].length; l++) {//col
    //         //const element = array[l];
    //         //let temp = arr[i][l]
    //         row += header[l]+":"+  arr[i][l]
    //         if (l !== arr[0].length-1 ) {
    //             row+=","
    //         }
    //     }
    //     body.push(row)
    //     row={}       
    // }
    //recipes()
    //console.log(body[0])
    //console.log(typeof(body))
    //MakeCard(arr)
    // return body.map(card=>
        
    //     <Card
    //         dish={card.dish}
    //         key={card.dish}
    //     />
    // )
//}
//setTimeout(function(){ A()},5000)

function MakeCard(arr){
    //debugger
    //var body = arr;
    //A()
    //body.push(csv)
    //console.log(arr)
    console.log(csv)
    //body.map
    const listItems = arr.map(item =>
        <div>
              {/* <a href={item.url}> */}
                  {/* <img className="img-fluid" 
                        src={item.image} 
                        alt={item.site} />
                   <p>{item.site}</p> */}
                   <h2>arr.dish</h2>
                   console.log(arr)

                {/* </a> */}
           </div>
      );
    return arr.map(card=>{
         //console.log(arr)
        return <Card
            dish={card.Dish}
            cuisine={card.Cuisine}
            key={card.Dish}
        />


    })
    return(
        <div>
            { listItems  }
        </div>
      )
}

function num(arr){
    //console.log(A())
    return arr
}
//console.log()
//export default MakeCard;

//export default Pet;

export default A;