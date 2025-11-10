import React from 'react';

export default function LoginPage() {
  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', overflow: 'hidden' }}>
      <iframe
        src="https://voicedemo-316842561818.us-west1.run.app/"
        allow="microphone; autoplay"
        style={{ width: '100%', height: '100%', border: 'none' }}
      />
    </div>
  );
}
