import React, {useState, useEffect} from 'react'
import { collection, getDocs } from "firebase/firestore"
import { db } from "../../lib/firebase"
import {Link} from "react-router-dom"
import Items from './Items'
import {BsBoxArrowInRight} from "react-icons/bs";

const Property = () => {
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

    const truncatedData = images.slice(0, 3)
    console.log(truncatedData)

  return (
    <div className="mt-20">
        <div>
            <div className='mb-10'>
                <h1 className="text-2xl text-center md:text-3xl font-bold">Featured Properties
                    <Link to="/property">
                        <h6 className="float-right text-sm flex md:mr-[8rem] text-blue-400">see all <BsBoxArrowInRight/></h6>
                    </Link>
                </h1>

            </div>
            <div className="px-9  container mx-auto grid grid-cols-1 gap-10 md:grid-cols-3 lg:grid-cols-3">
                {
                    truncatedData.map((image) => {
                        return (
                            <div key={image.id}>
                            <Link to={`/view/${image.id}`}>
                                <Items {...image} />
                            </Link>
                        </div>
                        )
                    })
                }
            </div>
        </div>
    </div>
  )
}

export default Property
