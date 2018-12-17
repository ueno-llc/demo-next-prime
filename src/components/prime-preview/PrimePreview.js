import React from 'react';
import { primeUrl } from '../../utils/primeUtils';

export const PrimePreview = () => {
  const [versionId, setVersionId] = React.useState(null);
  
  React.useEffect(() => {
    fetch(primeUrl + '/auth/user', { credentials: 'include' })
    .then(res => res.json())
    .then(data => {
      setVersionId(data && data.versionId);
    });
  }, []);

  const onClick = async () => {
    await fetch(primeUrl + '/auth/preview', { credentials: 'include' });
    window.location = '/preview';
  }

  if (!versionId) {
    return null;
  }

  return (
    <div
      onClick={onClick}
      style={{
        display: 'flex',
        cursor: 'pointer',
        position: 'fixed',
        bottom: 16,
        left: 16,
        zIndex: 10,
        background: '#1F3E44',
        width: 64,
        height: 64,
        borderRadius: '50%',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: 'Arial, sans-serif',
        fontSize: 32,
        color: 'white',
      }}
    >
      X
    </div>
  );
}
