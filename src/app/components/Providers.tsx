"use client"
import React from 'react'
import { Provider } from 'react-redux';
import { persistor, store } from '../../../redux/store';
import { PersistGate } from 'redux-persist/integration/react';

const Providers = ({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) => {
  return (
    <div>
        <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
      {children}
      </PersistGate>
        </Provider>
    </div>
  )
}

export default Providers
