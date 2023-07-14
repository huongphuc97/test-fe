import { useState, useRef } from "react"

import CustomChart from "../components/chart/Chart"
import CustomButton from "../components/form/Button"
import { categoriesMyRecord, datasetChartMyPage, myExerciseItems, myDiaryItems } from "../utils/MockData"
import { labelChart } from "../utils/Variables"

const MyRecord = () => {
  const chartRef = useRef(null)
  const diaryRef = useRef(null)
  const exerciseRef = useRef(null)
  const [displayNumber, setDisplayNumber] = useState(8)

  const showMoreItems = () => {
    setDisplayNumber(displayNumber + 8)
  }

  const scrollIntoView = (value) => {
    if (value === 0) {
      chartRef.current.scrollIntoView({ behavior: 'smooth' })
    } else if (value === 1) {
      exerciseRef.current.scrollIntoView({ behavior: 'smooth' })
    } else diaryRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="record">
      <div className="record-categories">
        {categoriesMyRecord.map((item, index) => (
          <img
            src={item}
            alt={item}
            key={index}
            onClick={() => scrollIntoView(index)}
          />
        ))}
      </div>
      <div ref={chartRef} className="record-chart">
        <CustomChart
          showButtons
          date="2021.05.21"
          width={960}
          height={304}
          labels={labelChart}
          datasets={datasetChartMyPage}
        />
      </div>

      <div ref={exerciseRef} className="record-exercise">
        <div className="record-exercise__content">
          <span className="record-exercise__text">my exercise</span>
          <span className="record-exercise__date">2021.05.21</span>
        </div>
        <div className="record-exercise__block">
          {myExerciseItems.map((item, index) => (
            <div key={index} className="record-exercise__item">
              <div className="d-flex">
                <div className="record-exercise__point"></div>
                <div className="d-flex flex-col">
                  <span className="record-exercise__label font-custom">{item.label}</span>
                  <span className="record-exercise__calories">{item.calories}</span>
                </div>
              </div>
              <span className="record-exercise__time">{item.time}</span>
            </div>
          ))}
        </div>
      </div>

      <span className="diary-title">my diary</span>

      <div ref={diaryRef} className="record-diary">
        {myDiaryItems.slice(0, displayNumber).map((item, index) => (
          <div key={index} className="record-diary__item">
            <span className="record-diary__datetime">{item.date}</span>
            <span className="record-diary__datetime">{item.time}</span>
            <span className="record-diary__content font-custom">{item.content}</span>
          </div>
        ))}
      </div>

      {myDiaryItems.length > displayNumber && (
        <div className="home-items__button">
          <CustomButton
            label="自分の日記をもっと見る"
            onClick={showMoreItems}
          />
        </div>
      )}
    </div>
  )
}

export default MyRecord