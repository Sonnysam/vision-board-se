import React,{ useEffect, useState } from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../lib/firebase"
import {Link} from "react-router-dom"
import Property from './Property'
import Search from './Search'
import Loading from '../Loading'

const GetData = () => {
    const [images, setImage] = useState([])

    useEffect(() => {
      getImages()
    }, [])
  
    const getImages = () => {
      const imagecollection = collection(db, "Properties")
      getDocs(imagecollection)
        .then(response => {
          const img = response.docs.map(doc => ({
            data: doc.data(),
            id: doc.id,
          }))
          setImage(img)
        })
        .catch(error => console.log(error.message))
    }
    console.log(images)
  return (
    <>
      {images.length === 0 ? 
        <Loading />
        :
        <section className='mt-10 mb-20'>
          <div className='text-center font-bold text-2xl mb-5'>
            <h1 class="header">Available Houses</h1>
                
            <form>
                <Search {...images} />
            </form>
          </div>
          <div className="px-9  container mx-auto grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            {
              images.map((image) =>{
                return (
                <div key={image.id}>
                    <Link to={`/view/${image.id}`}>
                        <Property {...image} />
                    </Link>
                </div>
                )
                
            })
            }
            
          </div>
        </section>
      }
    </>
  )
}

export default GetData
