import { useState } from "react"

export function useToggle(){

    const [theme, setTheme] = useState("light")


    function switchTheme(){
        if(theme === "light"){
            setTheme("dark")
        } else {
            setTheme("light")
        }
    }


    function resetTheme(){
        setTheme("light")
    }


    return {
        theme,
        switchTheme,
        resetTheme
    }
}