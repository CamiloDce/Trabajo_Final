import { Route, Routes } from "react-router-dom";
import AutoList from "../components/AutoList";
import AddAuto from "../components/AddAuto";
import EditAuto from "../components/EditAuto";
import '../style/autopage.css'
export const AutosPage = () => {
  return (
   <div className="containerAutos">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <Routes> 
              <Route index element={<AutoList />} />
              <Route path="add" element={<AddAuto />} />
              <Route path="edit/:id" element={<EditAuto />} />
            </Routes>
          </div>
        </div>
      </div>
  )
}
