const CustomButton = ({ label, onClick }) => {
  return (
    <button className="custom-button font-custom" onClick={onClick}>
      {label}
    </button>
  )
}

export default CustomButton