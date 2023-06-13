import React from 'react'

import LoggedIn from './components/LoggedIn'
import GroceryList from './components/GroceryList'

export default function App() {
  return (
    <div>
        {/* <LoggedIn /> */}
        <GroceryList myList={["canteloupe", "dried mango", "kombucha", "watermelon", "apples", "strawberry", "frozen pizza", "sugar", "flour", "chips", "bread", "hotdogs"]} />
    </div>
  )
}
