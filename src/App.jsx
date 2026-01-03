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
      <div className = "Photo">
        <img src={`${import.meta.env.BASE_URL}Photo.jpg`} alt="Image of Pizza"/>
      </div>
    </div>
  )
}