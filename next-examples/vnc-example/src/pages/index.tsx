import React, { useState } from 'react';
import Head from 'next/head';
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('../../src/component/VncClient'), { ssr: false });

const Home = (): JSX.Element => {
  const [vncUrl, setVncUrl] = useState('');
  const [inputScheme, setInputScheme] = useState('ws');
  const [inputHost, setInputHost] = useState('');
  const [inputPort, setInputPort] = useState<number>(6080);

  const connect = () => {
    if (inputHost.length > 0) {
      const url = `${inputScheme}://${inputHost}:${inputPort}`;
      setVncUrl(url);
    }
  }

  const validate = (value: string): boolean => {
    return Number.isInteger(value);
  }

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className="px-4 py-3 sm:px-6">
          <div className="shadow sm:rounded-md sm:overflow-hidden w-full">
            <div className="px-4 py-5 bg-white space-y-3 sm:p-4">
              <select
                className="rounded-md py-2.5"
                onChange={({ target: { value } }) => {
                  console.log(value);
                  setInputScheme(value);
                }}
              >
                <option>ws</option>
                <option>wss</option>
              </select>
              <input type="text" name="host" id="host" x-model="host"
                className="focus:ring-indigo-500 justify-center focus:border-indigo-500 flex-1 mx-1 px-4 py-3 w-96 rounded-md sm:text-sm border-gray-300"
                placeholder="your-vnc-url" onChange={({ target: { value } }) => {
                  setInputHost(value);
                }}
                aria-describedby="urlHelp"
              />
              <input type="text" name="port" id="port" x-model="port"
                className="focus:ring-indigo-500 justify-center focus:border-indigo-500 flex-1 mx-2 px-4 py-3 w-15 rounded-md sm:text-sm border-gray-300"
                placeholder="6080" onChange={({ target: { value } }) => {
                  if (value.length > 0 && validate(value)) {
                    setInputPort(Number.parseInt(value))
                  }
                  if (value.length === 0) {
                    setInputPort(6080);
                  }
                }}
              />
              <button onClick={connect}
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >Connect</button>
            </div>
          </div>
        </div>
        <DynamicComponent url={vncUrl} />
      </main>

      <footer>
      </footer>
    </div>
  )
};

export default Home;
