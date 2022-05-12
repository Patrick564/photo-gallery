import { useEffect, useState } from 'react'
import { getImages } from '../api/s3-api'

const ImagesContainer = () => {
  const [images, setImages] = useState([])

  const loadImages = async () => {
    const { Contents } = await getImages()

    setImages(Contents)
  }

  useEffect(() => {
    loadImages()
  }, [])

  console.log(images)

  return (
    <div className="flex flex-col md:flex-row gap-5 items-center justify-center">
      {
        images.map((file, idx) => {
          return (
            <div className="w-72 h-72 border-2 p-2 rounded-lg border-slate-600 flex flex-col justify-between">
              <img
                src={`https://photo-gallery-heroku.s3.us-east-2.amazonaws.com/${file.Key}`}
                className="w-auto h-52"
                key={idx}
              />

              <button className="bg-red-500 border border-red-700 rounded-md p-1 text-white">
                Delete
              </button>
            </div>
          )
        })
      }
    </div>
  )
}

export default ImagesContainer
