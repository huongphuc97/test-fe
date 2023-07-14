import { useEffect, useRef } from "react"

const OutsideClickHandler = ({ onOutsideClick, children, className }) => {
  const wrapperRef = useRef()

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (event.target.className === "header-right__menu") {
        return
      }
      if (wrapperRef.current && !wrapperRef?.current?.contains(event.target)) {
        onOutsideClick()
      }
    }

    document.addEventListener("mousedown", handleClickOutside)

    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [onOutsideClick])

  return <div className={className} ref={wrapperRef}>{children}</div>
};

export default OutsideClickHandler
