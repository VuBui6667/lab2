import Card from "./Card"

const LIST_JOB = [
  {
    "path": "fpt.png",
    "name": "FPT",
  },
  {
    "path": "viettel.png",
    "name": "Viettel",
  },
  {
    "path": "gem_vn.png",
    "name": "Gem VN",
  },
  {
    "path": "logo_rikkei.png",
    "name": "Rikkei",
  },
  {
    "path": "one_mount.png",
    "name": "One Mount",
  },
  {
    "path": "prudential.png",
    "name": "Prudential",
  },
  {
    "path": "tech_com_bank.png",
    "name": "Techcombank",
  },
  {
    "path": "tiki.png",
    "name": "Tiki",
  },
]

const ContainerCard = () => {
  return (
    <div className="container" style={{"margin": "50px auto"}}>
      <div className="row">
        {
          LIST_JOB.map((job, index) => (
            <div className="col-12 col-sm-6 col-lg-3" style={{"marginBottom": "50px"}} key={index}>
              <Card job={job}/>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default ContainerCard