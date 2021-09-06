import React, { ChangeEvent, useState } from 'react';
import Button from '@material-ui/core/Button';
import JsonEditor from './JsonEditor';
import JsonModel from './models/JsonModel';

const App = ():JSX.Element => {
  const [json, setJson] = useState([]);

  const handleUpload = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    const file: File = (input.files as FileList)[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = () => setJson(JSON.parse(fileReader.result as string));
  };

  const isEmptyArray = Array.isArray(json) && !json.length;
  const isEmptyObject = !Array.isArray(json) && !Object.keys(json).length;

  if (isEmptyArray || isEmptyObject) {
    return (
      <>
        <Button
          variant="contained"
          component="label"
        >
          Upload Json File
          <input
            type="file"
            hidden
            onChange={handleUpload}
          />
        </Button>
      </>
    );
  }

  return (
    <JsonEditor json={new JsonModel(json)} goBack={() => setJson([])} />
  );
};

export default App;
