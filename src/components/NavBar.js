export default function NavBar({ onClickCreateMeal, onClickMenu, onClickCalendar, onClickGroceryList }) {
  return (
    <header className="header">
      <h1>🧑‍🍳 Meal Scheduler</h1>
      <nav>
        <h2 onClick={onClickCreateMeal}>Create Meal ➕</h2>
        <h2 onClick={onClickMenu}>Menu 🍴</h2>
        <h2 onClick={onClickCalendar}>Calendar 📆</h2>
        <h2 onClick={onClickGroceryList}>Grocery List 📃</h2>
      </nav>
    </header>
  );
}
