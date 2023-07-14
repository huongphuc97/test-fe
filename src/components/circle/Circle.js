import { useEffect, useRef } from "react"

const MyPageCircle = ({ className, date, percent }) => {
  const circle = useRef(null)

  useEffect(() => {
    const canvas = circle.current
    const ctx = canvas.getContext("2d")
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const radius = 100
    const startAngle = Math.PI
    const endAngle = (3/2) * Math.PI

    ctx.beginPath()
    ctx.arc(centerX, centerY, radius, startAngle, endAngle, true)
    ctx.lineWidth = 3
    ctx.strokeStyle = "#fff"
    ctx.shadowColor = "#FC7400"
    ctx.shadowBlur = 6
    ctx.shadowOffsetX = 0
    ctx.shadowOffsetY = 0
    ctx.stroke()
  })

  return (
    <div className={className}>
      <div className="relative">
        <canvas ref={circle} width="200" height="200"></canvas>
        {(date || percent) && (
          <div className="center-element d-flex align-center">
            <span className="circle-date">{date}</span>
            <span className="circle-percent">{percent}</span>
          </div>
        )}
      </div>
    </div>
  )
}

export default MyPageCircle