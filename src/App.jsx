import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import MainLayout from './layout/mainLayout'
import HomePage from './pages/homePage'
import Information from './pages/Information'
import Posts from './pages/Posts'
import SinglePost from './pages/SinglePost'


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/Information" element={<Information />} />
            <Route element={<Posts />}>
              <Route path="/" element={<Posts />} />
              <Route path="/:id" element={<SinglePost />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter >

    </>
  )
}

export default App
