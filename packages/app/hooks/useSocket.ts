import React, { useEffect, useState } from 'react';
import { connect } from 'socket.io-client';

// eslint-disable-next-line no-undef
let socket: SocketIOClient.Socket = null;

export default function useSocket() {
  useEffect(() => {
    console.log('Initializing Socket');

    socket = connect('http://localhost:4000');
    socket.on('connect', () => {
      console.log(`Connected: ${socket.id}`);
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const emit = (
    eventName: string,
    data: any,
    callback?: (...args: any[]) => void,
  ) => {
    socket.emit(eventName, data, (response) => callback(response));
  };

  const addEventListener = (
    eventName: string,
    callback?: (...args: any[]) => void,
  ) => {
    socket.on(eventName, callback);
  };

  const removeListener = (eventName: string) => {
    socket.removeListener(eventName);
  };

  return {
    emit,
    addEventListener,
    removeListener,
  };
}
