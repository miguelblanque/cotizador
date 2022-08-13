import { useCallback, useMemo , useRef} from "react"

import useCotizador from "../hooks/useCotizador"
import { MARCAS, PLANES} from "../context"

const Resultado = () => {
        const { resultado , datos } = useCotizador()
        const { marca, plan, year } = datos

       // Usamos useCallback para que no realice le re-render de la marca y plan  has que no se modifique el resultado
        //Obtenemos el nombre de la marca. 
        const [nombreMarca] = useCallback(MARCAS.filter(m => m.id=== Number(marca)), [resultado])

         //Obtenemos el nombre del plan
         const [nombrePlan] = useMemo( () => PLANES.filter(p => p.id=== Number(plan)), [resultado])
         
         //
        const yearRef= useRef(year)

    //Si no hay datos no se muestra nada
    if (resultado === 0 ) return null
    //Mostramos el Resumen
    return (
    <div className="bg-gray-100 text-center mt-5 p-5 shadow">
      <h2 className="text-gray-600 font-black text-3xl">
            Resumen
      </h2>
      <p className="my-2">
        <span className="font-bold">Marca: </span>
        {nombreMarca.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Plan: </span>
        {nombrePlan.nombre}
      </p>
      <p className="my-2">
        <span className="font-bold">Año: </span>
        {yearRef.current}
      </p>
      <p className="my-2 text-2xl">
        <span className="font-bold">Total Cotizacion: </span>
        {resultado}
      </p>

    </div>
  )
}

export default Resultado