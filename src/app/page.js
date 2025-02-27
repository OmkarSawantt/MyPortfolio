"use client";
import AnimatedBackground from './Components/Background'
import { AnimatePresence } from 'framer-motion';
import WelcomeScreen from './Components/WelcomeScreen';
import { useState } from 'react';
import Navbar from './components/Navbar';
import MainPage from './pages/MainPage';
import About from './pages/About';
import Portfolio from './pages/Portfolio'
import ContactPage from './pages/Contact';
export default function Home() {
  const [showWelcome, setShowWelcome] = useState(true);
  return (
    < >
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>
    {!showWelcome && (
      <>
        <Navbar/>
        <AnimatedBackground />
        <MainPage/>
        <About/>
        <Portfolio/>
        <ContactPage/>
      </>
    )}
    </>
  );
}
