import React, { useState } from 'react';
import { VncScreen } from 'react-vnc';

interface VncClientProps {
  container?: Element,
  url: string
}

const VncClient: React.FunctionComponent<VncClientProps> = (props): JSX.Element => {
  const [url] = useState(props.url);

  return url.length > 0 ? (
    <VncScreen
      url={url}
      scaleViewport
      background="#000000"
      style={{
        width: '75vw',
        height: '75vh',
      }}
    />
  ) : (<div>VNC URL not provided.</div>);
};

export default VncClient;
