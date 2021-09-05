import React, { ChangeEvent, useState } from 'react';
import JsonEditor from './JsonEditor';
import JsonModel from './models/JsonModel';

const App = ():JSX.Element => {
  const [json, setJson] = useState({});

  const handleUpload = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    const file: File = (input.files as FileList)[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = () => setJson(JSON.parse(fileReader.result as string));
  };

  if (Object.keys(json).length === 0) {
    return (
      <>
        <h1>JSON upload</h1>
        <input type="file" onChange={handleUpload} />
      </>
    );
  }

  return (
    <JsonEditor json={new JsonModel(json)} />
  );
};

export default App;
