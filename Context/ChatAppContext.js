import React,{useState, useEffect } from "react";
import {useRouter} from "next/router";

// Import Internal
import{
    ChechIfWalletConnected,
    connectWallet,
    connectingWithContract,
} from "../Utils/apiFeature";

export const ChatAppContect = React.createContext();

export const ChatAppProvider = ({ Children }) => {
    const title = "Hey Welcome to blockchain Chat App";

    return(
        <ChatAppContect.Provider value={{ title }}>
            {children}
        </ChatAppContect.Provider>
    );
};