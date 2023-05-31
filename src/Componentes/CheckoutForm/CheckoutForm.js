import { useState } from "react";

const CheckoutForm =({onConfirm}) =>{
    const [name, setName] = useState("")
    const [telefono, setTelefono]= useState("")
    const [email, setEmail]= useState("")

    const handleConfirm = (event) =>{
        event.preventDefault()

        const userData={
            name, telefono, email
        }

        onConfirm(userData)
    }

    return(
        <div className="Container">
            <form onSubmit={handleConfirm} className="Form">
                <label className="Label">
                    Nombre
                    <input className="Input" type="text" value={name} onChange={({ target })=> setName(target.value)} />
                </label>
                <label className="Label">
                    Telefono 
                    <input className="Input" type="number" value={telefono} onChange={({ target })=> setTelefono(target.value)} />
                </label>
                <label className="Label">
                    E-mail
                    <input className="Input" type="e-mail" value={email} onChange={({ target })=> setEmail(target.value)} />
                </label>
                <div>
                    <button type="submit" className="Button">Crear orden</button>
                </div>
            </form>
        </div>
    )
}
export default CheckoutForm