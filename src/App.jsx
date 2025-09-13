import '@fontsource/roboto/100.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '@fontsource/roboto/900.css';
import Header from './Componenets/Header';
import Footer from './Componenets/Footer';
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";




function App() {
  return (
    <>
      <Header />
      <Outlet />
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}     
        newestOnTop={false}         
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"             
        toastStyle={{       
          background:'#66bfff' ,     
          borderRadius: "10px",
           width: "350px",
           display:'flex',
           alignItems:'center',
           justifyContent:'center',
            color: "black",
            gap:'0.5rem',
          boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
        }}
      />
      <Footer />
    </>
  );
}

export default App;