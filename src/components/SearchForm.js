import React from 'react'
import { useGlobalContext } from '../context'

const SearchForm = () => {
  const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')

  const changeSearch = () => {
    setSearchTerm(searchValue.current.value)
  }

React.useEffect(() => {
  searchValue.current.focus()
}, [])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <section className='section search'>
      <form className='search-form' onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="name">
            Search Your Favourite Coctail
          </label>
          <input id='name' type="text" ref={searchValue} onChange={changeSearch} />
        </div>
      </form>
    </section>
  )
}

export default SearchForm
