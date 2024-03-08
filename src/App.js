// import { useSelector } from 'react-redux'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { PageHeader } from "./components/page-header"
import { AllRecipesPage } from "./pages/all-recipes-page"
import { MyRecipesPage } from "./pages/my-recipes-page"
import { FavouriteRecipesPage } from "./pages/favourite-recipes-page"
import { RecipePage } from "./pages/recipe-page"
import "./App.css"
import { store } from "./store/store"

function App() {
  // const store = useSelector(store => store)

  console.log("store", store.getState())
  return (
    <BrowserRouter>
      <PageHeader></PageHeader>
      <Routes>
        <Route path="*" element={<AllRecipesPage />} />
        <Route path="myRecipes" element={<MyRecipesPage />} />
        <Route path="favouriteRecipes" element={<FavouriteRecipesPage />} />
        <Route
          path={"recipe/:recipeId"}
          element={<RecipePage recipes={store.getState().all.allRecipes} />}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
