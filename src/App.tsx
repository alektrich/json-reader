import React, { ChangeEvent, useState } from 'react';
import JsonModel from './models/JsonModel';

const App = ():JSX.Element => {
  const [json, setJson] = useState('');

  const handleUpload = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    const file: File = (input.files as FileList)[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = () => setJson(fileReader.result as string);
  };
  return (
    <>
      <h1>JSON upload</h1>

      <input type="file" onChange={handleUpload} />
      <br />
      {`Json Content: ${json}`}
    </>
  );
};

export default App;
