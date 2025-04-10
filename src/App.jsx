import './App.css'
import CountdownCard from './components/CountdownCard'

function App() {

  return (
    <>
<CountdownCard event={{eventName: "test", daysRemaining:2, imageUrl:"https://arbourblooms.ie/wp-content/uploads/2022/01/Valentines.jpg"}}></CountdownCard>
    </>
  )
}

export default App
