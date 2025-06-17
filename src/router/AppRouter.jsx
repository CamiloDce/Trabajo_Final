import {Route,Routes} from "react-router-dom";
import{NavBar} from "../NavBar";
import {
        HomePage,
        LoginPage,
        DashBoardPage 
        } from "../pages";
    import { AutosPage } from '../pages/AutosPage';
    import { FakeStore } from '../pages/FakeStore';    

export const AppRouter = () =>{
    return <>
            <Routes>
                <Route path = "/" element={<NavBar/>}>
                    <Route index element ={<HomePage/>} />
                    <Route path='login' element ={<LoginPage />}/> 
                    <Route path='dashboard' element ={<DashBoardPage />}>
                         <Route path='auto/*' element ={<AutosPage />}/>
                         <Route path='carrito' element = {<FakeStore />} />
                    </Route>
                </Route>
            </Routes>
            </>;
}   ;