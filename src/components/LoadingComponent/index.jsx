import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

export default function LoadingSpinner({ visible, text }) {
  return (
    <Spinner
      visible={visible}
      textContent={text || 'Aguarde um momento...'}
      textStyle={{ color: '#FFF' }}
    />
  );
}
