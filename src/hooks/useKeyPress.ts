import { useEffect } from 'react';

type CallbackType = (key: string) => void;

function useKeyPress(callback: CallbackType, deps: React.DependencyList) {
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      const key = e.key.toLowerCase();

      if (key.match(/^[a-z]$/)) {
        callback(key);
      }
    };

    document.addEventListener('keypress', handleKeyPress);

    return () => {
      document.removeEventListener('keypress', handleKeyPress);
    };
  }, deps);
}

export default useKeyPress;
