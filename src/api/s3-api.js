import { S3Client, S3 } from '@aws-sdk/client-s3'
import { v4 } from 'uuid'

const credentials = {
  accessKeyId: import.meta.env.PUBLIC_AWS_ACCESS_KEY_ID,
  secretAccessKey: import.meta.env.PUBLIC_AWS_SECRET_ACCESS_KEY
}
const region = 'us-east-2'

const s3 = new S3({
  credentials,
  region
})

const getImages = async () => {
  let data
  const params = {
    Bucket: 'photo-gallery-heroku'
  }

  try {
    data = await s3.listObjectsV2(params)
  } catch (error) {
    console.log(error)
  }

  return data
}

// const deleteImage = () => { }

	// in post /
	//   let params = {

	// post /delete

	//   let params = {
  //   Bucket: 'photo-gallery-heroku',
  //   Key: file,
  // }

  // try {
  //   await S3.deleteObject(params).promise()

export default getImages
