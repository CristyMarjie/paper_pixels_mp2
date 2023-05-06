import './App.css';
import Home from './component/Customer/Home/Home';
import AdminHome from './component/Admin/Home/AdminHome';


function App() {
  const path = window.location.pathname;
  return (
    <>
      {path==='/admin/orders' || path==='/admin/products' ? (
        <AdminHome /> 
      ) : (
        <Home /> 
      )}
      
    </>
  );
}

export default App;
