import { useState } from "react"
import { validateRut } from "../modules/validate"


const Input = () => {
  const [input, setInput] = useState("")
  const [isValid, setIsValid] = useState(false)

  function handleChange(e) {
    setIsValid(validateRut(e.target.value))
    setInput(e.target.value)
  }

  return (
    <>
      <div className="h-14">
        <input 
        value={input}
        onChange={handleChange}
        type="text" 
        className="h-full w-full rounded-lg ps-3 outline-none border-2 border-zinc-700 bg-zinc-900 font-semibold shadow-xl" 
        placeholder="12345678-9" />
      </div>
      <div>
        <span className={input === '' ? '' : `text-xs text-white px-2 py-[0.05rem] rounded font-bold 
        ${isValid ? 'bg-green-700' : 'bg-red-700'}`}>
        {
          input === '' 
          ? '' 
          : isValid ? 'Validado correctamente' : 'Escriba un rut valido'
        }
        </span>
      </div>
    </>
  )
}



export default Input