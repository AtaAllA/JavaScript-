function Box(_width,_height , _books)
{
  
    this.width=_width;
   this.height=_height;
   this.books = _books

}

function Book(id,name,WriterName,pages){
    this.id = id
    this.name = name
    this.WriterName =WriterName
    this.pages = pages
}



var B1 = new Book(1, "book1" , "Ata" , 10 );
var B2 = new Book(2 , "book2" , "Gerges" , 20);
var B3 = new Book(3 , "book3" , "Mina" , 30);

var arrayofboks = [B1 , B2 , B3]


var boxs = new Box(10 , 20 ,arrayofboks )


    var sum = 0

    for(i = 0 ; i <arrayofboks.length ; i++){
       

        sum += boxs.books[i].pages


}
console.log(sum) 


// Box.prototype.area = function(){
//     Box.get .sumPages()

//     var boxarea = this.Box.width * this.Box.height
//     console.log(boxareaarea)
// }
// Box.area(10 , 20)





var areaofbox = 0
areaofbox = boxs.width * boxs.height * 2
console.log(areaofbox)
