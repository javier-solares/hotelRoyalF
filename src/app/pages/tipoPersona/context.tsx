import {createContext, useState, ReactNode} from 'react'

interface ContentContextType {
  toggleModal: (data: number) => void
  show: boolean
  allData: Array<any>
}
type caracteristicasPersona = {
  id: number
  nombre: string
  imagen: string
}
export const ContentContext = createContext<ContentContextType>({} as ContentContextType)

export const ContentProvider: React.FC<{children: ReactNode}> = ({children}) => {
  const [show, setShow] = useState<boolean>(false)
  const [oneData, setOneData] = useState<Array<any>>([])
  const [opcion, setOpcion] = useState<number>(0)

  const toggleModal = (data: number) => {
    setOpcion(data)
    if (data === 1) {
      setOneData([])
    }
    setShow(!show)
  }

  const allData: caracteristicasPersona[] = [
    {
      id: 1,
      nombre: 'Bryan Guerra',
      imagen:
        'https://mmdate.vip/uploads/photos/thumbnail/2022/08/11/17624/1500_a4162a4c1a4374647aeaa3e929325cfc.jpeg',
    },
    {
      id: 2,
      nombre: 'Jane Smith',
      imagen:
        'https://mmdate.vip/uploads/photos/thumbnail/2022/08/11/17624/1500_a4162a4c1a4374647aeaa3e929325cfc.jpeg',
    },
    {
      id: 3,
      nombre: 'Alice Johnson',
      imagen:
        'https://mmdate.vip/uploads/photos/thumbnail/2022/08/11/17624/1500_a4162a4c1a4374647aeaa3e929325cfc.jpeg',
    },
  ]

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
