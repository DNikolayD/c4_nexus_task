import classes from "./Sort.module.css"

const Sort = ({setNewSortType}) => {

  const onSortChangeHandler = (e) =>{
    setNewSortType(e.target.value)
  }

    return (
        <form action="/action_page.php" >
  <label htmlFor="sort" className={classes.label}>Sort by</label>
  <select name="sort" id="sort" className={classes.form} onChange={onSortChangeHandler}>
    <option value="Alphabetical a-z">Alphabetical a-z</option>
    <option value="Alphabetical z-a">Alphabetical z-a</option>
    <option value="Price ascending">Price ascending</option>
    <option value="Price descending">Price descending</option>
  </select>
</form>
    )
}

export default Sort