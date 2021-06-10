import React, { useState, useContext } from 'react'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [isAsideIsOpened, setAsideIsOpened] = useState(false)
    const [isModalIsOpened, setModalIsOpened] = useState(false)

    const openSidebar = () => {
        setAsideIsOpened(true)
    }

    const closeSidebar = () => {
        localStorage.setItem('side', false)
        setAsideIsOpened(false)
    }

    const openModal = () => {
        setModalIsOpened(true)
    }

    const closeModal = () => {
        localStorage.setItem('modal', false)
        setModalIsOpened(false)
    }

    return <AppContext.Provider value={{isAsideIsOpened, setAsideIsOpened, isModalIsOpened, setModalIsOpened, openModal, openSidebar, closeSidebar, closeModal}}>{children}</AppContext.Provider>
}
// custom hook
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
