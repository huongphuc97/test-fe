import { useState } from "react"

import CustomChart from "../components/chart/Chart"
import MyPageCircle from "../components/circle/MyPageCircle";
import CustomButton from "../components/form/Button"
import HomeTop from "../assets/images/main-photo.svg"
import { datasetChartMyPage, myPageItems, categoriesMyPage } from "../utils/MockData"
import { labelChart } from "../utils/Variables"

const MyPage = () => {
  const [displayNumber, setDisplayNumber] = useState(8)
  const [data, setData] = useState(myPageItems)

  const filterItems = (value) => {
    setData(myPageItems.filter(item => item.category === value))
    setDisplayNumber(8)
  }

  const showMoreItems = () => {
    setDisplayNumber(displayNumber + 8)
  }

  return (
    <div className="home">
      <div className="home-top">
        <div className="relative">
          <img
            src={HomeTop}
            alt={HomeTop}
            height={312}
          />
          <MyPageCircle
            className="center-element"
            date="05/21"
            percent="75%"
          />
        </div>

        <CustomChart
          width={960}
          height={270}
          labels={labelChart}
          datasets={datasetChartMyPage}
        />
      </div>

      <div className="home-categories">
        {categoriesMyPage.map((item, index) => (
          <img
            src={item.image}
            alt={item.category}
            key={index}
            onClick={() => filterItems(item.category)}
          />
        ))}
      </div>

      <div className="home-items">
        {data.slice(0, displayNumber).map((item, index) => (
          <div className="home-items__container" key={index}>
            <img
              src={item.image}
              alt={item.label}
            />
            <div className="home-items__box">
              {item.label + ' ' + item.category}
            </div>
          </div>
        ))}
      </div>

      {data.length > displayNumber && (
        <div className="home-items__button">
          <CustomButton
            label="記録をもっと見る"
            onClick={showMoreItems}
          />
        </div>
      )}
    </div>
  )
}

export default MyPage