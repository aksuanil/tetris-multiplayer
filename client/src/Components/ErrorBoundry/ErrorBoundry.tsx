import React, { useState, ErrorInfo, ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface ErrorBoundaryProps {
  children: ReactNode;
}

export function ErrorBoundary({ children }: ErrorBoundaryProps) {
  const [hasError, setHasError] = useState(false);

  function handleComponentError(error: ErrorEvent) {
    console.error(error);
    setHasError(true);
  }

  useEffect(() => {
    window.addEventListener('error', handleComponentError);

    return () => {
      window.removeEventListener('error', handleComponentError);
    };
  }, []);

  return hasError ? <h1>Something went wrong.</h1> : <React.Fragment>{children}</React.Fragment>;
}
