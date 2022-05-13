const ImagesContainer = ({ imagesList, deleteImage }) => {
  return (
    <div className="flex flex-wrap flex-row gap-5 items-center justify-center">
      {
        imagesList.map((file, idx) => {
          return (
            <div className="min-w-72 h-72 bg-violet-100 border border-violet-300 p-2 rounded-lg flex flex-col justify-between">
              <img
                src={`https://photo-gallery-heroku.s3.us-east-2.amazonaws.com/${file.Key}`}
                className="w-auto h-52"
                key={idx}
              />

              <button
                id={file.Key}
                className="bg-red-500 border border-red-700 rounded-md p-1 text-white"
                onClick={deleteImage}
              >
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
