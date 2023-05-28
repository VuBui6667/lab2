const Header = () => {
  return (
    <>
    <div className="d-flex justify-content-between align-items-center border-bottom border-gray">
      <div className="d-flex align-items-center font-weight-bolder" style={{"fontSize": "20px"}}> 
        <div className="px-4 py-3">
          <img src="/images/logo.png" alt="logo" />
        </div>
        <div className="px-4 py-3 d-none d-md-block">Tìm việc</div>
        <div className="px-4 py-3 d-none d-md-block">Tạo CV</div>
        <div className="px-4 py-3 d-none d-md-block">Tin tức</div>
        <div className="px-4 py-3 d-none d-md-block">Về chúng tôi</div>
      </div>
      <div className="d-none d-lg-flex">
        <div className="px-4 py-3 btn btn-primary text-white rounded font-weight-bolder" style={{"fontSize": "20px"}}>Login</div>
        <div className="px-4 py-3 border border-primary btn mx-4 font-weight-bolder text-primary" style={{"fontSize": "20px"}}>Register</div>
      </div>
      <button 
        className="d-lg-none mx-4 my-3 position-relative" 
        type="button"
        data-toggle="collapse" 
        data-target="#menu" 
        aria-expanded="false" 
        aria-controls="collapseExample"
      >
        <img src="/images/list.svg" alt="" style={{"width": "24px", "height": "24px"}}/>
      </button>
    </div>
    <div className="collapse border border-gray mx-4 font-weight-bolder" id="menu" style={{"width" : "140px", "float": "right", "text-align": "start", "margin-top": "-34px"}}>
          <div className="d-md-none">
            <div className="px-2 py-1">Tìm việc</div>
            <div className="px-2 py-1">Tạo CV</div>
            <div className="px-2 py-1">Tin tức</div>
            <div className="px-2 py-1">Về chúng tôi</div>
          </div>
          <div className="px-2 py-1">Login</div>
          <div className="px-2 py-1">Register</div>
      </div>
    </>
  )
}

export default Header