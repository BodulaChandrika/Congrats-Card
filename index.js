const element = (
  // Write your code here.
  <div className='container d-flex flex-row justify-content-center'>
    <h1 className='heading'>Congratulations</h1>
    <div className='bg-container d-flex flex-row justify-content-center'>
      <img
        src='https://assets.ccbp.in/frontend/react-js/congrats-card-profile-img.png'
        className='image'
      />
      <h1 className='head'>Kiran V</h1>
      <p className="para">
         Vishnu institute of Computer Education and Technology.
                    Bhimavaram
      </p>
      <img src="https://assets.ccbp.in/frontend/react-js/congrats-card-watch-img.png"  className="image"/>
    </div>
  </div>
)

ReactDOM.render(element, document.getElementById('root'))
