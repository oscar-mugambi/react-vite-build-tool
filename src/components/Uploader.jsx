import React from 'react';
import Dropzone from 'react-dropzone-uploader';
import 'react-dropzone-uploader/dist/styles.css';

const Uploader = () => {
  const handleChangeStatus = () => {
    console.log('hey');
  };

  const handleSubmit = () => {
    console.log('hey');
  };

  return (
    <Dropzone
      // getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      styles={{ dropzone: { minHeight: 200, maxHeight: 250 } }}
    />
  );
};

export default Uploader;
