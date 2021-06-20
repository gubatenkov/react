import React, { useState, useEffect } from 'react'
import { FaSearch } from 'react-icons/fa'
import Photo from './Photo'
// const clientID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`
const mainUrl = `https://api.unsplash.com/photos/`
const searchUrl = `https://api.unsplash.com/search/photos/`
const clientId = `?client_id=${process.env.REACT_APP_CLIENT_ID}`

function App() {
  const [loading, setLoading] = useState(false)
  const [photos, setPhotos] = useState([])
  const [page, setPage] = useState(0)
  const [term, setTerm] = useState('')

  const fetchPhotos = async () => {
    let url;
    const urlPage = `&page=${page}`
    const urlTerm = `&query=${term}`
    if (term) {
      url = `${searchUrl}${clientId}${urlPage}${urlTerm}`
    } else {
      url = `${mainUrl}${clientId}${urlPage}`
    }

    try {
      setLoading(true)
      const response = await fetch(url)
      const data = await response.json()
      setPhotos((oldPhotos) => {
        if (term && page === 1) {
          return data.results
        }
        else if (term) {
          return [...oldPhotos, ...data.results]
        } else {
          return [...oldPhotos, ...data]
        }
      })
      setLoading(false)
    } catch (error) {
      setLoading(false)
      console.log(error.message);
    }
  }

  useEffect(() => {
    fetchPhotos()
  }, [page])

  const handleSubmit = (e) => {
    e.preventDefault()
    setPage(1)
  }

  useEffect(() => {
    const listener = window.addEventListener('scroll', () => {
      if (!loading 
        && window.innerHeight + window.scrollY >= document.body.scrollHeight - 10) {
        setPage((oldPage) => {
          return oldPage + 1
        })
      }
    })

    return () => window.removeEventListener('scroll', listener)
  }, [])

  return <main>
    <section className="search">
      <form className="search-form">
        <input className='form-input' value={term} onChange={(e) => setTerm(e.target.value)} type="text" placeholder='search' />
        <button className="submit-btn" type='submit' onClick={handleSubmit}>
          <FaSearch />
        </button>
      </form>
    </section>

    <section className='photos'>
      <div className="photos-center">
        {photos.map((photo, index) => {
          return <Photo key={index} {...photo}/>
        })}
      </div>
        {loading && <h2 className='loading'>Loading...</h2>}
    </section>
  </main>
}

export default App
