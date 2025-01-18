import Inicio from "pages/Inicio/inicio";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Favoritos from "pages/Favoritos/favoritos";
import Player from "pages/Player/player";
import NaoEncontrada from "pages/NaoEncontrada/naoEncontrada";
import PaginaBase from "pages/PaginaBase/paginaBase";

function AppRoutes() {
    return (
        <BrowserRouter>
            <Routes>
              <Route path="/" element={<PaginaBase />}></Route>
                <Route index element={<Inicio />}></Route>
                <Route path="favoritos" element={<Favoritos />}></Route>
                <Route path=":id" element={<Player />}></Route>
                <Route path="*" element={<NaoEncontrada/>}></Route>
            </Routes>
        </BrowserRouter>
    )
}

export default AppRoutes;