import { useEffect, useState } from 'react'
import getImages from '../api/s3-api'

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
    <div>
      {
        images.map((file, idx) => {
          return (
            <img src={`https://photo-gallery-heroku.s3.us-east-2.amazonaws.com/${file.Key}`} key={idx} />
          )
        })
      }
    </div>
  )
}

export default ImagesContainer
