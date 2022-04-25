import logo from './logo.svg';
import './App.css';
import { useEffect, useRef, useState } from 'react';
import Canvas from "./Canvas.js";
import { Input, Button, Spacer, Select } from '@geist-ui/react'

//import { getStarknet } from "@argent/get-starknet"

import { ec } from 'starknet';

//let c = new Contract(1, 2);


{/*async function connectWallet() {
  // Check if wallet extension is installed and initialized.
  const starknet = getStarknet()
  // May throw when no extension is detected, otherwise shows a modal prompting the user to download Argent X.
  const [userWalletContractAddress] = await starknet.enable({ showModal: true })

  // Check if connection was successful
  if(starknet.isConnected) {
    // If the extension was installed and successfully connected, you have access to a starknet.js Signer object to do all kinds of requests through the user's wallet contract.
    //starknet.account.execute({ ... })
    console.log("Success!")
  } else {
    // In case the extension wasn't successfully connected you still have access to a starknet.js Provider to read starknet states and sent anonymous transactions
    //starknet.provider.callContract( ... )
    console.log("Starknet not connected")
  }
}*/}


function App() {
  const [horseNum, setHorseNum] = useState('1');
  const [hash, setHash] = useState("0x19fs232");
  const [bet, setBet] = useState("10");
  
  return (
    <div className="wrapper">
      <Canvas />

      <Button style={{marginTop: "30px", marginLeft: "50%", transform: "translateX(-50%)"}}auto type="primary" scale={1} onClick={() => console.log("click")}>Connect wallet!</Button>

      <div className="ui-wrapper">
        <div className="input-component">
          <Select placeholder="Choose your horse!" onChange={(val) => setHorseNum(val) }>
            <Select.Option value="1">Horse 1</Select.Option>
            <Select.Option value="2">Horse 2</Select.Option>
            <Select.Option value="3">Horse 3</Select.Option>
          </Select>
        </div>

        <div className="input-component">
          <Select className="select" placeholder="Choose your bet!" onChange={(val) => setBet(val) }>
            <Select.Option value="10">10$</Select.Option>
            <Select.Option value="20">20$</Select.Option>
            <Select.Option value="30">30$</Select.Option>
          </Select>
        </div>
        
        <div className="input-component">
          <Input style={{width: "200px"}} placeholder="Type random string!" onChange={e => setHash(e.target.value)} />
        </div>
        <Spacer h={.5} />
        <Button auto type="primary" scale={1} onClick={() => console.log("click")}>Play!</Button>
      </div>
    </div>
  );
}

export default App;
