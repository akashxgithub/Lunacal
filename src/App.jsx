import React from 'react';
import RightWidget from './components/RIghtWidget';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="flex min-h-screen bg-mainColor">
      {/* Left empty space */}
      <div className="hidden md:block w-1/2"></div>

      {/* Right widgets */}
      <div className="w-full md:w-1/2 p-5">
        <RightWidget />
        <Gallery />
      </div>
    </div>
  );
}

export default App;
