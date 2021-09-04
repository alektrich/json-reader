import React, { ChangeEvent, useState } from 'react';

const App = ():JSX.Element => {
  const [files, setFiles] = useState('');

  const handleUpload = (event: ChangeEvent) => {
    const input = event.target as HTMLInputElement;
    const file: File = (input.files as FileList)[0];
    const fileReader = new FileReader();
    fileReader.readAsText(file, 'UTF-8');
    fileReader.onload = () => setFiles(fileReader.result as string);
  };
  return (
    <>
      <h1>JSON upload</h1>

      <input type="file" onChange={handleUpload} />
      <br />
      {`Json Content: ${files}`}
    </>
  );
};

export default App;
