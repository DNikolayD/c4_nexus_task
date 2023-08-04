import classes from "./ColorFilter.module.css"

const ColorFilter = ({onColorChangeHandler}) => {

  const onColorPickHandler = (e) => {
    onColorChangeHandler(e.target.value)
  }

    return(
        <div>
            <h3>Filter by Color</h3>
  <label>
    <input className={classes.radio} type="radio" name="group" value="red" onClick={onColorPickHandler} />
    <span className={classes.span}>Red</span> 
  </label>
  <label>
    <input className={classes.radio} type="radio" name="group" value="blue" onClick={onColorPickHandler} />
    <span className={classes.span}>Blue</span> 
  </label>
  <label>
    <input className={classes.radio} type="radio" name="group" value="green" onClick={onColorPickHandler} />
    <span className={classes.span}>Green</span> 
  </label>
  <label>
    <input className={classes.radio} type="radio" name="group" value="yellow" onClick={onColorPickHandler} />
    <span className={classes.span}>Yellow</span> 
  </label>
  <label>
    <input className={classes.radio} type="radio" name="group" value="white" onClick={onColorPickHandler} />
    <span className={classes.span}>White</span> 
  </label>
</div>
    )
}

export default ColorFilter