import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

const Uploader = () => {
  const url = 'https://cfw091dtg9.execute-api.us-east-1.amazonaws.com/default/getPresignedURL2';

  const handleChangeStatus = () => {
    console.log('hey');
  };

  // const getUploadParams = () => {
  //   console.log('here');
  // };

  const handleSubmit = async (file) => {
    const target = file[0];

    console.log(file);
    const response = await fetch(url);
    const data = await response.json();

    const uploadImage = await fetch(data.uploadURL, {
      method: 'PUT',
      headers: {
        'Content-Type': 'image/jpeg',
      },
      body: target['file'],
    });

    console.log('uploadImage');
  };

  return (
    <Dropzone
      onSubmit={handleSubmit}
      // getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
    />
  );
};

export default Uploader;
