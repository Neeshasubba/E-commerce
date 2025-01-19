import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Hash from './components/Hash/Hash'
import Products from './components/Product/Products'
// import AOS from "aos";

const App = () => {
  // React.useEffect(()=>{
  //   AOS.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: 'ease-in-sine',
  //     delay: 100,
  //   });
  //   AOS.refresh();
  // },[]);
  return (
    <div>
   
<Navbar />
<Hash />
<Products />
  
    </div>
 
  )
}

export default App

