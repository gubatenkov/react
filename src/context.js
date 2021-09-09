import React, { useState, useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()

const initialState = {
  loading: false,
  cart: cartItems,
  total: 0,
  amount: 0,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const clearCart = () => {
    dispatch({ type: 'CLEAR_CART' })
  }

  const removeCartItem = (id) => {
    dispatch({ type: 'REMOVE_ITEM', payload: id })
  }

  const increaseCartItem = (id) => {
    dispatch({ type: 'INCREASE_ITEM', payload: id })
  }

  const decreaseCartItem = (id) => {
    dispatch({ type: 'DECREASE_ITEM', payload: id })
  }

  const updateItem = (id, type) => {
    dispatch({ type: 'UPDATE_AMOUNT', payload: {id, type} })
  }

  const fetchData = async () => {
    dispatch({ type: 'LOADING'})
    const response = await fetch(url)
    const cart = await response.json()
    dispatch({ type: 'DISPLAY_ITEMS', payload: cart })
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    dispatch({ type: 'GET_TOTALS'})
  }, [state.cart])

  return (
    <AppContext.Provider
      value={{...state, clearCart, removeCartItem, increaseCartItem, decreaseCartItem, updateItem}}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
