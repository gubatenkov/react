import React, { useState, useEffect } from 'react'
import { useFetch } from './useFetch'
import Follower from './Follower'

function App() {
  const { loading, data } = useFetch()
  const [currentPage, setCurrentPage] = useState(0)
  const [followers, setFollowers] = useState([])

  useEffect(() => {
    if (loading) return;
    setFollowers(data[currentPage])
  }, [loading, currentPage])
  console.log(followers);

  const handlePage = (index) => {
    setCurrentPage(index)
  }

  const prevPage = () => {
    setCurrentPage((oldPage) => {
      let prevPage = oldPage - 1
      if (prevPage < 1) prevPage = data.length - 1
      return prevPage
    })
  }

  const nextPage = () => {
    setCurrentPage((oldPage) => {
      let nextPage = oldPage + 1
      if (nextPage > data.length -1) nextPage = 0
      return nextPage
    })
  }

  return <main>
    <div className='section-title'>
      <h1>{loading ? 'loading...' : 'pagination'}</h1>
      <div className='underline'></div>
    </div>
    <section className='followers'>
      <div className='container'>
        {followers.map((follower) => {
          return <Follower key={follower.id} {...follower}/>
        })}
      </div>
      {loading ? null : <div className='btn-container'>
        <button className='prev-btn' onClick={prevPage}>prev</button>
        {data.map((item, index) => {
          return <button className={index === currentPage ? 'page-btn active' : 'page-btn'} key={index} onClick={() => handlePage(index)}>{index + 1}</button>
        })}
        <button className='next-btn' onClick={nextPage}>next</button>
      </div>}
    </section>
  </main>
}

export default App
