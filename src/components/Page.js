import { useState } from 'react';
import "../App.css"

import Header from './Layout/Header';
import Footer from './Layout/Footer';
import CategoryInfo from './Layout/CategoryInfo';
import Filtter from './Layout/Filtter';
import Sort from './Layout/Sort';
import Main from './Layout/Main';

// import Header from './components/Layout/Header';
// import Footer from './components/Layout/Footer';
// import CategoryInfo from './components/Layout/CategoryInfo';
// import Filtter from './components/Layout/Filtter';
// import Sort from './components/Layout/Sort';
// import Main from './components/Layout/Main';

const data = [{id: 1, name: "item1", description: "red dress", prize: 20, stars: 2}, {id: 2, name: "item2", description: "blue bag", prize: 60, stars: 4}, {id: 3, name: "item3", description: "white jewlery", prize: 80, stars: 2}, {id: 4, name: "item4", description: "yellow T-shirt", prize: 15, stars: 5}, {id: 5, name: "item5", description: "red dress", prize: 25, stars: 2}, {id: 6, name: "item6", description: "blue bag", prize: 65, stars: 4}, {id: 7, name: "item7", description: "white jewlery", prize: 85, stars: 2}, {id: 8, name: "item8", description: "yellow T-shirt", prize: 20, stars: 5}, {id: 9, name: "item9", description: "red dress", prize: 26, stars: 2}, {id: 10, name: "item10", description: "blue bag", prize: 66, stars: 4}, {id: 11, name: "item11", description: "white jewlery", prize: 86, stars: 2}, {id: 12, name: "item12", description: "yellow T-shirt", prize: 10, stars: 5}, {id: 13, name: "item13", description: "red dress", prize: 27, stars: 2}, {id: 14, name: "item14", description: "blue bag", prize: 67, stars: 4}, {id: 15, name: "item15", description: "white jewlery", prize: 87, stars: 2}, {id: 16, name: "item16", description: "yellow T-shirt", prize: 21, stars: 5}, {id: 17, name: "item17", description: "red dress", prize: 17, stars: 2}, {id: 18, name: "item18", description: "blue bag", prize: 16, stars: 4}, {id: 19, name: "item19", description: "white jewlery", prize: 15, stars: 2}, {id: 20, name: "item20", description: "yellow T-shirt", prize: 9, stars: 5}]



function Page() {

    const onMinValueChangeHandler = (newMinValue) => {
      setMinValue(newMinValue)
    }

    const onMaxValueChangeHandler = (newMaxValue) => {
      setMaxValue(newMaxValue)
    }

    const setNewSortType = (newSortType) => {
      setSortType(newSortType)
    }

    const saveNewType = (newType) => {
        setType(newType)
    }

    const setNewColor = (newColor) => {
        setColor(newColor)
    }

    const setNewNumberOfItems = () => {
      const newNumber = numberOfItems + 30
      setNumberOfItems(newNumber)
    }

    const [type, setType] = useState("dress")
    const [color, setColor] = useState("")
    const [numberOfItems, setNumberOfItems] = useState(3)
    const [sortType, setSortType] = useState("")
    const [minValue, setMinValue] = useState(10)
    const [maxValue, setMaxValue] = useState(250)


  var newData = data.filter(item => item.description.includes(type))
  if(color !== ""){
    newData = newData.filter(item => item.description.includes(color))
  }
  newData = newData.filter(item => item.prize >= minValue && item.prize <= maxValue)
  const total = newData.length
  newData = newData.slice(0, numberOfItems)
  if(sortType === "Alphabetical a-z"){
    newData.sort(function(a, b) {
      if(a.name > b.name) return 1
      if(a.name < b.name) return -1
    })
  }
  else if(sortType === "Alphabetical z-a"){
    newData.sort(function(a, b) {
      if(a.name > b.name) return -1
      if(a.name < b.name) return 1
    })
  }
  else if(sortType === "Price ascending"){
    newData.sort(function(a, b) {
      if(a.prize > b.prize) return 1
      if(a.prize < b.prize) return -1
    })
  }
  else if(sortType === "Price descending"){
    newData.sort(function(a, b) {
      if(a.prize > b.prize) return -1
      if(a.prize < b.prize) return 1
    })
  }

  return (
    <div className='grid-container'>
      <Header onSaveTypeHandler={saveNewType} className='item1' />
      <Filtter onColorChangeHandler={setNewColor} className='item2'onMinValueChangeHandler={onMinValueChangeHandler} onMaxValueChangeHandler={onMaxValueChangeHandler} />
      <CategoryInfo type={type} className='item3' />
      <Sort setNewSortType={setNewSortType} className='item4' />
      <Main total={total} items={newData} className='item5' />
      <button onClick={setNewNumberOfItems} className='item6'>Load more</button>
      <Footer className='item7' />
    </div>
  );
}

export default Page;