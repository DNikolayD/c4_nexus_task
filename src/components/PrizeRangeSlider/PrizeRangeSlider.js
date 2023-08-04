import { useState } from "react"
import classes from "./PrizeRangeSlider.module.css"

const PrizeRangeSlider = ({onMaxValueChangeHandler, onMinValueChangeHandler}) => {
  
  const [minValue, setMinValue] = useState(10)

  const [maxValue, setMaxValue] = useState(250)

  const onMaxValueChange = (e) => {
    var newMaxValue = e.target.value
    setMaxValue(newMaxValue)
    onMaxValueChangeHandler(newMaxValue)
  }

  const onMinValueChange = (e) => {
    var newMinValue = e.target.value
    setMinValue(newMinValue)
    onMinValueChangeHandler(newMinValue)
  }
  
  return(
        <>
        <div className={classes.card}>
      <h4 className={classes.text}>Price Filter</h4>

      <div className={classes.price_content}>
        <div>
          <label className={classes.label}>Min</label>
          <p id="min-value" className={classes.p_text}>{minValue}$</p>
        </div>

        <div>
          <label className={classes.label}>Max</label>
          <p id="max-value" className={classes.p_text}>{maxValue}$</p>
        </div>
      </div>

        <div className={classes.range_slider}>
          <input className={classes.input} type="range" defaultValue="10" min="1" max="500" step="10" onChange={onMinValueChange} />
          <input className={classes.input} type="range" defaultValue="250" min="10" max="500" step="10" onChange={onMaxValueChange} />
        </div>
    </div>
        </>
    )
}

export default PrizeRangeSlider