import React from 'react';
import Button from '@material-ui/core/Button';
import { observer } from 'mobx-react-lite';
import { Json } from './models/JsonModel';

export interface JsonModelClass {
  updateProp(name: string, value: string | number, index?: number): void;
  getData(): Json[];
}

export type Props = {
  json: JsonModelClass,
  goBack: any
}

const JsonEditor = observer(({ json, goBack } : Props) : JSX.Element => (
  <>
    <Button variant="contained" color="primary" onClick={goBack}>
      Back
    </Button>
    {json.getData().map((row, index) => Object.keys(row).filter((prop) => prop !== 'id' && typeof row[prop] !== 'object').map((prop) => (
      <>
        <p>{`${prop} ==> ${row[prop]}`}</p>
        <input type="text" name={prop} value={row[prop]} onChange={(e) => json.updateProp(prop, e.target.value, index)} />
      </>
    )))}
  </>
));

export default JsonEditor;
