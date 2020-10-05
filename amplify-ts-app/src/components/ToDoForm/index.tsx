import { CSSProperties } from '@material-ui/styles';
import React, { useState } from 'react';

const initialState = { name: '', description: '' };

export type ToDoFormProp = {
  onSubmit: (name: string, description: string) => Promise<void>
};

const ToDoForm: React.FC<ToDoFormProp> = (props) => {
  const [formState, setFormState] = useState(initialState);

  const setInput = (key: string, value: string) => {
    setFormState({ ...formState, [key]: value });
  };

  const styles = {
    container: {
      width: 400, margin: '0 auto', display: 'flex', flex: 1, flexDirection: 'column', justifyContent: 'center', padding: 20,
    } as CSSProperties,
    todo: { marginBottom: 15 },
    input: {
      border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18,
    },
    button: {
      backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px',
    },
  };

  const handler = async () => {
    await props.onSubmit(formState.name, formState.description);
  };

  return (
    <React.Fragment>
      <h2>Amplify Todos</h2>
      <input
        onChange={(event) => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={(event) => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={handler}>Create Todo</button>
    </React.Fragment>
  );
};

export default ToDoForm;
