var words;

function loadWords(arr) {
    words = arr;
    console.log(words[0])
    console.log(words[1])
    console.log(words.length)
    console.log(words[0].length)
    console.log(words)

    //recipes()
}

function loadData() {
    Papa.parse("foodlist2.csv", {
        download: true,
        
        complete: function(results) {
            loadWords(results.data);
        }
    });
}
window.addEventListener("load", loadData);
function recipes(){
    //$("#show").html("Showing "+words.length+" recipe"+(words.length==1?"":"s"))
    words.forEach(row);
}
function row(item, index){
    //console.log(words[index][0])
    //console.log("a")
    if(index >0){
        console.log("a")

    
    }
    //index.forEach(columns)
}
function columns(index){

}