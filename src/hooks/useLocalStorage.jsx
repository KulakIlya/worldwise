import { useEffect, useState } from 'react';

const INITIAL_STATE = { zoom: 13 };

const useLocalStorage = () => {
  const [config, setConfig] = useState(() => {
    return JSON.parse(localStorage.getItem('config')) ?? INITIAL_STATE;
  });

  const getConfig = key => JSON.parse(localStorage.getItem('config') ?? '{}')[key];

  const changeConfig = (key, value) => {
    setConfig(prev => ({ ...prev, [key]: value }));
  };

  useEffect(() => {
    localStorage.setItem('config', JSON.stringify(config));
  }, [config]);

  return [getConfig, changeConfig];
};
export default useLocalStorage;
