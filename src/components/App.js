import { useState } from "react";
import Calendar from "./Calendar";
import CreateMeal from "./CreateMeal";
import GroceryList from "./GroceryList";
import Menu from "./Menu";
import NavBar from "./NavBar";

export default function App() {
  const [meals, setMeals] = useState([]);
  const [ingredients, setIngredients] = useState([]);

  const [showCreateMeal, setShowCreateMeal] = useState(true);
  const [showCalendar, setShowCalendar] = useState(false);
  const [showGroceryList, setShowGroceryList] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  function handleShowCreateMeal() {
    setShowCalendar(false);
    setShowGroceryList(false);
    setShowMenu(false);
    setShowCreateMeal(true);
  }

  function handleShowCalendar() {
    setShowCreateMeal(false);
    setShowGroceryList(false);
    setShowMenu(false);
    setShowCalendar(true);
  }

  function handleShowMenu() {
    setShowCreateMeal(false);
    setShowCalendar(false);
    setShowGroceryList(false);
    setShowMenu(true);
  }

  function handleShowGroceryList() {
    setShowCreateMeal(false);
    setShowCalendar(false);
    setShowMenu(false);
    setShowGroceryList(true);
  }

  return (
    <div>
      <NavBar
        onClickCreateMeal={handleShowCreateMeal}
        onClickCalendar={handleShowCalendar}
        onClickGroceryList={handleShowGroceryList}
        onClickMenu={handleShowMenu}
      />
      <main>
        {showCreateMeal && <CreateMeal />}
        {showCalendar && <Calendar />}
        {showGroceryList && <GroceryList />}
        {showMenu && <Menu />}
      </main>
    </div>
  );
}
