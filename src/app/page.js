'use client';
import React, { useState, useEffect } from 'react';
import Welcomepage from '@/components/Welcomepage';
import ErrorPage from '@/components/Errorpage';
import Homepage from '@/components/homepage';

function App() {
  const [showErrorPage, setShowErrorPage] = useState(true);
  const [showWelcomePage, setShowWelcomePage] = useState(false);

  useEffect(() => {
    // Show ErrorPage for 13 seconds, then switch to Welcomepage
    const errorTimer = setTimeout(() => {
      setShowErrorPage(false);
      setShowWelcomePage(true);
    }, 10000);

    return () => clearTimeout(errorTimer);
  }, []);

  useEffect(() => {
    if (showWelcomePage) {
      // Show Welcomepage for 10 seconds, then switch to Homepage
      const welcomeTimer = setTimeout(() => setShowWelcomePage(false), 10000);
      return () => clearTimeout(welcomeTimer);
    }
  }, [showWelcomePage]);

  if (showErrorPage) return <ErrorPage />;
  if (showWelcomePage) return <Welcomepage />;
  return <Homepage />;
}

export default App;
