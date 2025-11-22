import { Route, Routes } from 'react-router-dom'
import Authlayout from './components/ui/auth/layout'
import Authlogin from './pages/authroization/login'
import AuthRagister from './pages/authroization/Ragister'
import Adminlayout from './components/admin-view-c/layout'
import Admindashboard from './pages/admin-view/Admindashboard'
import AdminProduct from './pages/admin-view/Products'
import AdminOrder from './pages/admin-view/order'
import Adminfeatures from './pages/admin-view/features'
import Shopinglayout from './components/shoping-view-c/Shopinglayout'
import Notfound from './pages/not-found/Notfound'
function App() {


  return (
    <div className='flex flex-col overflow-hidden bg-white'>
      {/* <h1>Sultan bhai op</h1> */}
      <Routes>
        <Route path='/auth'    element ={<Authlayout/>}>

        <Route path='login'    element={<Authlogin/>} ></Route>
        <Route path='ragister' element={<AuthRagister/>} ></Route>

      </Route>

        <Route path='/admin'    element={<Adminlayout/>}>

        <Route path='dashboard' element={<Admindashboard/>}/>
        <Route path='product'   element={<AdminProduct/>}/>
        <Route path='orders'    element={<AdminOrder/>}/>
        <Route path='features'  element={<Adminfeatures/>}/>

        </Route>

        <Route path='/shop' element ={<Shopinglayout/>}></Route>
        <Route path='*' element={<Notfound/>}></Route>
      </Routes>
     
    </div>
  )
}

export default App
