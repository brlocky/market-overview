import React from 'react';
import { MiniChart } from "react-ts-tradingview-widgets";


function App() {
  return (
    <>
      <div className="flex w-full  justify-center gap-x-2 p-2">
        
        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="USI:ADD" dateRange='1D' />
        </div>

        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="USI:TICK" dateRange='1D' />
        </div>

        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="USI:UVOL" dateRange='1D' />
        </div>

      </div>

      <div className="flex w-full  justify-center gap-x-2 p-2">
        
        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="NAS100USD" dateRange='1D'   />
        </div>

        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="AMEX:SPY" dateRange='1D'   />
        </div>

        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="QQQ" dateRange='1D'   />
        </div>

        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="IWM" dateRange='1D'   />
        </div>
      </div>

      <div className="flex w-full  justify-center gap-x-2 p-2">
        
        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="AAPL" dateRange='1D'   />
        </div>
        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="TSLA" dateRange='1D'   />
        </div>
        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="NVDA" dateRange='1D'   />
        </div>
        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="MSFT" dateRange='1D'   />
        </div>
  

      </div>
      <div className="flex w-full  justify-center gap-x-2 p-2">
        
        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="NFLX" dateRange='1D'   />
        </div>
        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="AMZN" dateRange='1D'   />
        </div>
        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="NASDAQ:GOOGL" dateRange='1D'   />
        </div>
        <div className="flex-col">
          <MiniChart colorTheme="dark" width="100%" symbol="META" dateRange='1D'   />
        </div>

      </div>


    </>
  );
}

export default App;
