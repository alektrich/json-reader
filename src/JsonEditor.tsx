import React from 'react';
import { observer } from 'mobx-react-lite';
import { Json } from './models/JsonModel';

export interface JsonModelClass {
  updateProp(name: string, value: string | number): void;
  getData(): Json;
}

export type Props = {
  json: JsonModelClass
}

const JsonEditor = observer(({ json } : Props) : JSX.Element => (
  <>
    <h1>JSON editor</h1>
    {`Json Content: ${JSON.stringify(json.getData())}`}
    <button type="button" onClick={() => json.updateProp('my', 'changed')}>Turn on no shadow</button>
  </>
));

export default JsonEditor;
