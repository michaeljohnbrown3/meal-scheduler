export default function CreateMeal() {
  return (
    <main>
      <h2>Create New Meal</h2>
      <form className="new-meal-form">
        <label>Meal Name: </label>
        <input type="text" />

        <label>Ingredient 1: </label>
        <input type="text" />

        <label>Ingredient 2: </label>
        <input type="text" />

        <label>Ingredient 3: </label>
        <input type="text" />

        <label>Ingredient 4: </label>
        <input type="text" />

        <label>Ingredient 5: </label>
        <input type="text" />

        <button>Add New Meal</button>
      </form>
    </main>
  );
}
