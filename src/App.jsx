import './App.css'
export default function App() {
  return (
    <div className="app">
      <Photo/>
    </div>
  )
}

function Photo(){
  return (
    <div className = "Both">
      <div className = "Black"></div>
      <div>
        <img className = "Photo" src={`${import.meta.env.BASE_URL}Photo.jpg`} alt="Image of Pizza"/>
      </div>
    </div>
  )
}