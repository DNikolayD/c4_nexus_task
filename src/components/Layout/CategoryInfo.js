import classes from "./CategoryInfo.module.css"

const categories = [{name: "dresses", description: "description for dresses"}, {name: "bags", description: "description for bags"}, {name: "jewlery", description: "description for jewlery"}, {name: "T-shirt", description: "description for T-shirt"}]

const CategoryInfo = ({type, className}) => {
    const category = categories.find(categoryInfo => categoryInfo.name.includes(type))
    return(<div className={className}>
    <ul className={classes.list}>
        <li className={classes.name}><p>{category.name}</p></li>
        <li className={classes.description}><p>{category.description}</p></li>
    </ul>

    </div>)
}

export default CategoryInfo