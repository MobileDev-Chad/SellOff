import React, { useState } from 'react'
import { useFormikContext } from 'formik'

import ErrorMessage from './ErrorMessage'
import ImageInputList from '../ImageInputList'

export default FormImagePicker = () => {
  const [imageUris, setImageUris] = useState([])

  const handleAdd = (uri) => {
    setImageUris([...imageUris, uri])
  }

  const handleRemove = (uri) => {
    setImageUris(imageUris.filter((imageUri) => imageUri !== uri))
  }

  return (
    <>
      <ImageInputList
        imageUris={imageUris}
        onAddImage={handleAdd}
        onRemoveImage={handleRemove}
      />
    </>
  )
}
