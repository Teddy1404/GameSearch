import React,{useState,useContext} from "react";
export const ThemeContext = React.createContext({
    theme:'light',
    setTheme:()=>{},
});
