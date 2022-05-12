import { S3 } from '@aws-sdk/client-s3'
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

const addImages = async ({ image }) => {
  let params = {
    Bucket: 'photo-gallery-heroku',
    Key: v4(),
    Body: image
  }

  try {
    await s3.uploadPart(params)
  } catch (error) {
    console.log(error)
  }
}

const deleteImages = async ({ image }) => {
  const params = {
    Bucket: 'photo-gallery-heroku',
    Key: image
  }

  try {
    await s3.deleteObject(params)
  } catch (error) {
    console.log(error)
  }
}

export {
  getImages,
  addImages,
  deleteImages
}
