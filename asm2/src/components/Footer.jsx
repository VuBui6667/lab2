const Footer = () => {
  return (
    <div style={{"background": "#f4f5f6", "height": "200px", "paddingTop": "20px"}} className="border-top border-gray">
      <div className="d-md-flex justify-content-between align-items-center">
        <div>
          <div className="px-4 py-3">
            <img src="/images/logo.png" alt="logo" />
          </div>
        </div>
        <div className="d-flex">
          <p className="px-4 py-2">Về MetaCV</p>
          <p className="px-4 py-2">Khám phá</p>
          <p className="px-4 py-2">Cộng đồng MetaCV</p>
        </div>
      </div>
      <p className="px-4 py-2">© 2023 - 2032 MetaCV®</p>
    </div>
  )
}

export default Footer