import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import Sidebar from './components/sidebar'
import Content from './components/content'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>      
    <Header />
    <div className="flex">
      <Sidebar/>
      <Content/>
    </div>
    </>
  )
}

export default App
