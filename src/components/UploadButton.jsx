import { useRef, useState } from 'react'

import { addImages } from '@api/s3-api'

const UploadButton = ({ refreshImages }) => {
  const fileInput = useRef('')
  const [button, setButton] = useState(true)

  const handleUpload = async () => {
    await addImages({ image: fileInput.current.files[0] })

    fileInput.current.value = ''

    setButton(true)
    refreshImages()
  }

  return (
    <div className="flex justify-center items-baseline">
      <input
        className="file:text-violet-700 file:text-sm file:border-0 file:rounded-full file:bg-violet-100 file:px-2 file:py-1 file:mr-4 hover:file:cursor-pointer text-white"
        type='file'
        accept='image/*'
        name='image'
        id='image'
        ref={fileInput}
        onChange={() => setButton(false)}
      />

      <button
        className="bg-green-500 border border-green-500 rounded-md px-2 py-1 text-white disabled:bg-slate-400 disabled:border-slate-500"
        disabled={button}
        onClick={handleUpload}
      >
        Upload
      </button>
    </div>
  )
}

export default UploadButton
