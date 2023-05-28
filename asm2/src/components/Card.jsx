/* eslint-disable react/prop-types */
const Card = ({job}) => {
  return (
    <div className="card">
      <img
      src={`/images/${job.path}`}
      className="card-img-top border-bottom border-gray w-100" style={{"height": "180px"}} alt="..." />
      <div className="card-body">
        <h5 className="card-title">{job.name}</h5>
        <p className="card-text">Description</p>
        <a href="#" className="btn btn-primary">Apply</a>
      </div>
    </div>
  )
}

export default Card