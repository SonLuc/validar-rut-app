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
      <div className="h-12 flex gap-5">
        <input 
        value={input}
        onChange={handleChange}
        type="text" 
        className="h-full w-full rounded-lg ps-3 outline-none" 
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