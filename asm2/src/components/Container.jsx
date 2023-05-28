const SLIDERS = [
  {
    path: "slider-1.png",
    label: "slider 1",
  },
  {
    path: "slider-2.png",
    label: "slider 2",
  },
  {
    path: "slider-2.png",
    label: "slider 2",
  },
]

const Container = () => {
  return (
    <div style={{"width": "600px", "padding": "50px 0" }}>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          {
            SLIDERS.map((slide, index) => (
              <div className={`carousel-item ${index === 0 && 'active'}`} key={index}>
                <img src={`/images/${slide.path}`} className="d-block w-100" alt={slide.label} />
              </div>
            ))
          }
        </div>
      <button className="carousel-control-prev rounded-circle" style={{"width": "50px", "height": "50px", "margin": "auto 0"}} type="button" data-target="#carouselExampleControls" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </button>
        <button className="carousel-control-next rounded-circle" type="button" style={{"width": "50px", "height": "50px", "margin": "auto 0"}} data-target="#carouselExampleControls" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </button>
      </div>
    </div>
  )
}

export default Container