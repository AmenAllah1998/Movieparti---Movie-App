import React from 'react'
import './Cover.css'
function Cover() {
  return (
      <>
    <div className="d-flex h-100 text-center text-white bg-dark bg-cover">

<div className="cover-container d-flex w-100 h-100 p-3 mx-auto flex-column">
  <header className="mb-auto">
    <div>
      <img src='https://i.ibb.co/YD49BbK/logo.png' alt='logo' width="200px" className='mt-3'/>
    </div>
  </header>

  <main className="px-3 content">
    <h1>JOIN US FOR A MOVIE PARTY</h1>
    <p className="lead">Search For Movies That Match Your Mood.</p>
    <p className="lead">
    </p>
  </main>

</div>
</div>
</>
  )
}

export default Cover