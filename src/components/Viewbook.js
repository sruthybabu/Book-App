import React from 'react'
import Navbar from './Navbar'

const Viewbook = () => {
var booklist=[{
    "title":"Wings of fire",
    "price":"200",
    "author":"APJ",   
    "image":"https://images.indianexpress.com/2020/04/books_1200.jpg"
},
{
    "title":"Xmas Carol",
    "price":"130",
    "author":"Charles",  
    "image":"https://st2.depositphotos.com/1105977/5461/i/600/depositphotos_54615585-stock-photo-old-books-on-wooden-table.jpg" 
},
{
    "title":"XYZ",
    "price":"100",
    "author":"xxx", 
    "image":"https://www.incimages.com/uploaded_files/image/1920x1080/getty_883231284_200013331818843182490_335833.jpg"
}
]

  return (
    <div>
        <Navbar/>
        <div className="container">
            <div className="row">
                <div className='row g-3'>
                    {booklist.map((value,key)=>{
                        return <div className='col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4'>
                            <div class="card" >
  <img src={value.image} class="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title">{value.title}</h5>
    <p class="card-text">Author:{value.author}</p>
    <p class="card-text">Price:{value.price}</p>
    <a href="#" class="btn btn-primary">Buy Now</a>
  </div>
</div>
                            </div>
                    })}

                </div>

                


            </div>
        </div>
    </div>
  )
}

export default Viewbook