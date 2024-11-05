import React, { useEffect, useState } from 'react'

const DarkModeSwitch = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)

    const toggleDarkMode = () => {
        const newMode = !isDarkMode;
        setIsDarkMode(newMode)
    
        if (newMode) {
            document.documentElement.setAttribute('data-theme', 'dark');
            localStorage.setItem('theme', 'dark');        
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light')
            localStorage.setItem('theme', 'light');
        }
    }

    useEffect(() => {
        const saveTheme = localStorage.getItem('theme')

        if (saveTheme === 'dark') {
            document.documentElement.setAttribute('data-theme', 'dark');
            setIsDarkMode(true)       
        }
        else {
            document.documentElement.setAttribute('data-theme', 'light')
            setIsDarkMode(false)
        }

    }, [])

 

    // return (
        
    // )
}

export default DarkModeSwitch