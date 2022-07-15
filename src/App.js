import './App.css';
import React from 'react'
import HookTimer from './components/HookTimer';
// import GrandParent from './components/GrandParent';
// export const UserContext = React.createContext()
// export const ChannelContext = React.createContext()

function App() {
  return (
    <div className="App">
      {/* <UserContext.Provider value='Nabendu'>
        <ChannelContext.Provider value='TWD'>
          <GrandParent />
        </ChannelContext.Provider>
      </UserContext.Provider> */}
      <HookTimer />
    </div>
  );
}

export default App;
