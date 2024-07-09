function App() {
  return (
    <div className="h-screen flex items-center justify-center">
      <div className="max-w-3xl max-w-full px-6 text-center space-y-10">
        <p className="text-zinc-300 text-lg">Convide seus amigos e planeje a sua viagem!</p>

        <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center shadow-shape">
          <input type="text" placeholder="Para onde você vai?" className="bg-transparent" ></input>
          <input type="text" placeholder="Quando?" className="bg-transparent"></input>

          <button>Continuar</button>
        </div>

          <p className="text-sn text-zinc-500">Ao planejar sua viagem pela planner você automaticamente concorda <br></br> com nossos <a className="text-zinc-300 underline" href="#">termos de uso</a> e <a className="text-zinc-300 underline" href="#">  políticas de privacidade.</a></p>
      </div>
    </div>
 )
}

export default App
