import { footerLabel } from "../../utils/Variables"

const Footer = () => {
  return (
    <div className="footer">
      {footerLabel.map((item, index) => (
        <span className="font-custom" key={index}>{item}</span>
      ))}
    </div>
  )
}

export default Footer