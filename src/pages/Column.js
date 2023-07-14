import { useState } from "react"

import CustomButton from "../components/form/Button"
import { categoriesColumn, myColumnItems } from "../utils/MockData"

const Column = () => {
  const [displayNumber, setDisplayNumber] = useState(8)
  const [data, setData] = useState(myColumnItems)

  const filterItems = (value) => {
    setData(myColumnItems.filter(item => item.category.includes(value)))
    setDisplayNumber(8)
  }

  const showMoreItems = () => {
    setDisplayNumber(displayNumber + 8)
  }

  return (
    <div className="column">
      <div className="column-categories">
        {categoriesColumn.map((item, index) => (
          <img
            src={item.image}
            alt={item.category}
            key={index}
            onClick={() => filterItems(item.category)}
          />
        ))}
      </div>

      <div className="column-items">
        {data.slice(0, displayNumber).map((item, index) => (
          <div className="column-items__container" key={index}>
            <img
              src={item.image}
              alt={item.label}
            />
            <div className="column-items__box">
              <span>{item.date}</span>
              <span>{item.time}</span>
            </div>
            <div className="d-flex flex-col">
              <span className="column-items__content font-custom">{item.content}</span>
              <span className="column-items__category font-custom">#{item.category.join(' #')}</span>
            </div>
          </div>
        ))}
      </div>

      {data.length > displayNumber && (
        <div className="column-items__button">
          <CustomButton
            label="コラムをもっと見る"
            onClick={showMoreItems}
          />
        </div>
      )}
    </div>
  )
}

export default Column