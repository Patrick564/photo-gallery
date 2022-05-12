import { useState } from 'react'
import { addImages } from '../api/s3-api'

const UploadButton = () => {
  const [image, setImage] = useState()

  const handleImage = (e) => {
    setImage(e.target.files[0])
  }

  const sendImage = async () => {
    await addImages({ image })
  }

  console.log(!!image, 'aa')

  return (
    <div className="flex justify-center items-baseline">
      <input
        className="file:text-emerald-700 file:text-sm file:border-0 file:rounded-full file:bg-emerald-100 file:px-2 file:py-1 file:mr-4 hover:file:cursor-pointer text-white"
        type='file'
        accept='image/*'
        name='image'
        id='image'
        onChange={handleImage}
      />

      <button
        className="bg-green-500 border border-green-500 rounded-md px-2 py-1 text-white"
        disabled={!!!image}
        onClick={sendImage}
      >
        Send
      </button>
    </div>
  )
}

export default UploadButton
