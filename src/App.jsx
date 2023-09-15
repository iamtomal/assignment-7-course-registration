
import './App.css'
import Header from './components/Header/Header'
import Card from './components/Main/Card'
import Calculation from './components/Main/Calculation'

function App() {


  return (
    <>
      <Header></Header>

      <div className='flex gap-12'>

        <div className="w-3/4 bg-slate-400">
          <Card></Card>
        </div>
        <div className=" bg-red-400">
          <Calculation></Calculation>
        </div>

      </div>


    </>
  )
}

export default App
