const CLEAR_CART = 'CLEAR_CART'
const REMOVE_ITEM = 'REMOVE_ITEM'
const INCREASE_ITEM = 'INCREASE_ITEM'
const DECREASE_ITEM = 'DECREASE_ITEM'
const GET_TOTALS = 'GET_TOTALS'
const LOADING = 'LOADING'
const DISPLAY_ITEMS = 'DISPLAY_ITEMS'
const UPDATE_AMOUNT = 'UPDATE_AMOUNT'

const reducer = (state, action) => {
    switch (action.type) {
        case CLEAR_CART: 
            return {...state, cart: []}
        case REMOVE_ITEM: 
            const cart = state.cart.filter((item) => item.id !== action.payload)
            return {...state, cart}
        // case INCREASE_ITEM:
        //     const newCart = state.cart.map((item) => {
        //         if (item.id === action.payload) {
        //             return {...item, amount: item.amount + 1}
        //         }
        //         return item
        //     })
        //     return {...state, cart: newCart}
        // case DECREASE_ITEM: {
        //     const newCart = state.cart.map((item) => {
        //         if (item.id === action.payload) {
        //             return {...item, amount: item.amount - 1}
        //         }
        //         return item
        //     }).filter((item) => item.amount !== 0)
        //     return {...state, cart: newCart}
        // }
        case GET_TOTALS:
            let { total, amount } = state.cart.reduce((cartTotal, cartItem) => {
                const { price, amount } = cartItem
                const itemTotal = price * amount

                cartTotal.total += itemTotal
                cartTotal.amount += amount
                return cartTotal
            }, {
                total: 0,
                amount: 0,
            })
            total = parseFloat(total.toFixed(2))
            return {...state, total, amount}
        case LOADING:
            return {...state, loading: true}
        case DISPLAY_ITEMS:
            return {...state, cart: action.payload, loading: false}
        case UPDATE_AMOUNT:
            let tempCart = state.cart.map((item) => {
                if (item.id === action.payload.id) {
                    if (action.payload.type === 'inc') {
                        return {...item, amount: item.amount + 1}
                    }
                    if (action.payload.type === 'dec') {
                        return {...item, amount: item.amount - 1}
                    }
                }
                return item
            }).filter((cartItem) => cartItem.amount !== 0)
            return {...state, cart: tempCart }
        default:
            return state
    }
}

export default reducer
