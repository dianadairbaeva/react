import { useToggle } from "./hooks/useToggle"


export default function App(){

    const { theme, switchTheme, resetTheme } = useToggle()


    return(
        <div>

            <h1>Current theme: {theme}</h1>


            <button onClick={switchTheme}>
                Change theme
            </button>


            <button onClick={resetTheme}>
                Reset
            </button>


            {
                theme === "dark" &&
                <p>Dark mode enabled</p>
            }

        </div>
    )
}
