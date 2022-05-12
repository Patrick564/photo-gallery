import ImagesContainer from './Images'
import UploadButton from './UploadButton'

import { useEffect, useState } from 'react'

import { getImages, deleteImages } from '../api/s3-api'

const MainContainer = () => {
  const [images, setImages] = useState([])

  const loadImages = async () => {
    const { Contents } = await getImages()

    setImages(Contents)
  }

  const handleDelete = async (e) => {
    const key = e.target.id

    await deleteImages({ image: key })

    loadImages()
  }

  useEffect(() => {
    loadImages()
  }, [])

  return (
    <>
      <nav className="bg-indigo-500 border-b border-b-indigo-700 p-2">
        <UploadButton refreshImages={loadImages} />
      </nav>

      <main className="m-5">
        <ImagesContainer imagesList={images} deleteImage={handleDelete} />
      </main>
    </>
  )
}

export default MainContainer
