import { useRef, useEffect, useState } from 'react';

function App() {
  const button = useRef(null);
  const [clientid] = useState('YOUR_CLIENT_ID');
  const [flowid] = useState('YOUR_FLOW_ID');

  useEffect(() => {
    if (button.current) {
      button.current.addEventListener('metamap:loaded', ({ detail }) => console.log('[METAMAP] Loaded', detail));
      button.current.addEventListener('metamap:userStartedSdk', ({ detail }) => console.log('[METAMAP] User started verification', detail));
      button.current.addEventListener('metamap:userFinishedSdk', ({ detail }) => console.log('[METAMAP] User finished verification', detail));
      button.current.addEventListener('metamap:exitedSdk', ({ detail }) => console.log('[METAMAP] User exited verification', detail));
    }
  }, [button]);

  return (
    <metamap-button
      ref={button}
      clientid={clientid}
      flowid={flowid}
    >
    </metamap-button>
  );
}

export default App;
