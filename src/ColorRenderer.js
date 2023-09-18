import Color from './Color'
import Papa from "papaparse"
import Colorsss from "./Color.csv"
import { wait } from '@testing-library/user-event/dist/utils'


var w
const colors = [{
  hex: '#91A6FF',
  name: 'Cornflower Blue'
},
{
  hex: '#FF88DC',
  name: 'Persian Pink'
},
{
  hex: '#80FF72',
  name: 'Screamin Green'
},
{
  hex: '#FF5154',
  name: 'Tart Orange'
}]
function loadData() {
    
  Papa.parse(Colorsss, {
      download: true,
      delimiter:",",
      header:true,
      
      complete: function(results) {
          //loadWords(results.data);
          //MakeCard(results.data)
          //b= results.data
          console.log(typeof( results.data))
          ColorRenderer(results.data)
          //w = results.data
      }
  });
}
 function ColorRenderer () {
 //const map = new Map(Object.entries(JSON.parse(arr)));

  //console.log(typeof(arr))
  return colors.map(color =>
    <Color
      name={color.name}
      hex={color.hex}
      key={color.hex}
    />
  )
  
}
export default ColorRenderer;

//export default loadData;