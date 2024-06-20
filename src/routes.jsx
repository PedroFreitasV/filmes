import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Header from './components/Header'

import Home from './pages/Home'
import Erro from './pages/error'
import Filmes from './pages/Filmes'
import Favoritos from './pages/Favorites'

function AppRouter () {
    return(
        <BrowserRouter>
            <Header />
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/filme/:id' element={<Filmes />} />
                <Route path='/favoritos' element={<Favoritos />} />

                <Route path='*' element={<Erro />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter