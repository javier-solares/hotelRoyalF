import {createContext, useState, ReactNode} from 'react'

interface ContentContextType {
  toggleModal: (data: number) => void
  show: boolean
  allData: Array<any>
}

type caracteristicasCuartos = {
  tipoHabitacion: string
  estado: string
}

export const ContentContext = createContext<ContentContextType>({} as ContentContextType)

export const ContentProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [show, setShow] = useState<boolean>(false)
  const [oneData, setOneData] = useState<Array<any>>([])
  const [opcion, setOpcion] = useState<number>(0)
  const allData: caracteristicasCuartos[] = [
    {
      tipoHabitacion: 'Single Room',
      estado: 'Activo',
    },
    {
      tipoHabitacion: 'Double Room',
      estado: 'Inactivo',
    },
    {
      tipoHabitacion: 'Suite',
      estado: 'Activo',
    },
    {
      tipoHabitacion: 'Standard Room',
      estado: 'Inactivo',
    },
    {
      tipoHabitacion: 'Deluxe Room',
      estado: 'Activo',
    },
    // Add more data as needed
  ]

  const toggleModal = (data: number) => {
    setOpcion(data)
    if (data === 1) {
      setOneData([])
    }
    setShow(!show)
  }

  const value: any = {
    toggleModal,
    setOpcion,
    oneData,
    opcion,
    show,
    allData,
  }

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}
