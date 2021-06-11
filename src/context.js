import React, { useState, useContext, createContext } from 'react'
import sublinks from './data'

const AppContext = createContext()

const  AppProvider = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false)
    const [isSubmenuOpen, setIsSubmenuOpen] = useState(false)
    const [location, setLocation] = useState({})
    const [page, setPage] = useState({page:'', links: []})

    const openSidebar = () => {
        setIsSidebarOpen(true)
    }

    const closeSidebar = () => {
        setIsSidebarOpen(false)
    }

    const openSubmenu = (text, coordinates) => {
        const page = sublinks.find((sublink) => sublink.page === text)
        setPage(page)
        setLocation(coordinates)
        setIsSubmenuOpen(true)
    }

    const closeSubmenu = () => {
        setIsSubmenuOpen(false)
    }

    return <AppContext.Provider 
            value={{ 
                isSidebarOpen, 
                isSubmenuOpen, 
                openSidebar, 
                closeSidebar, 
                openSubmenu, 
                closeSubmenu,
                location,
                page
            }}>
        {children}
    </AppContext.Provider>
}

const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext }