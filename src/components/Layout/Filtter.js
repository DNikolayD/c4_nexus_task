import PrizeRangeSlider from "../PrizeRangeSlider/PrizeRangeSlider"
import ColorFilter from "../PrizeRangeSlider/ColorFilter"

const Filtter = ({onColorChangeHandler, className, onMinValueChangeHandler, onMaxValueChangeHandler}) => {
    return(
        <div className={className}>
        <PrizeRangeSlider onMinValueChangeHandler={onMinValueChangeHandler} onMaxValueChangeHandler={onMaxValueChangeHandler} />
        <ColorFilter onColorChangeHandler={onColorChangeHandler} />
        </div>
    )
}

export default Filtter