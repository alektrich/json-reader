import React, { MouseEventHandler } from 'react';
import Button from '@material-ui/core/Button';
import Box from '@material-ui/core/Box';
import Input from '@material-ui/core/Input';
import Divider from '@material-ui/core/Divider';
import { observer } from 'mobx-react-lite';
import { Json } from './models/JsonModel';
import getInputType from './utils/getInputType';

export interface JsonModelClass {
  updateProp(name: string, value: string | number, index?: number): void;
  getData(): Json[];
}

export type Props = {
  json: JsonModelClass,
  goBack: MouseEventHandler
}

const JsonEditor = observer(({ json, goBack } : Props) : JSX.Element => (
  <Box
    display="flex"
    justifyContent="center"
    flexDirection="column"
    width={500}
    margin="auto"
  >
    <Button variant="contained" color="primary" onClick={goBack}>
      Back
    </Button>
    {json.getData().map((row, index) => (
      <div key={row.uniqueId}>
        {
          Object.keys(row).filter((prop: string) => prop !== 'uniqueId' && typeof row[prop] !== 'object').map((prop: string) => (
            <div key={prop}>
              <p>{`"${prop}": ${row[prop]}`}</p>
              <Input readOnly={prop === 'id'} type={getInputType(row[prop])} name={prop} value={row[prop]} onChange={(e) => json.updateProp(prop, e.target.value, index)} />
            </div>
          ))
        }
        <Divider variant="middle" style={{ marginTop: '20px' }} />
      </div>
    ))}
  </Box>
));

export default JsonEditor;
