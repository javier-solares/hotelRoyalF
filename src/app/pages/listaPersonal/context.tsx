import {createContext, useState, ReactNode, useEffect} from 'react'
import {GetRoute, PostRoute} from '../../services/private'

interface ContentContextType {
  toggleModal: (data: number) => void
  show: boolean
  allData: Array<any>
  handleClose: () => void
  postStorePersonas:(data:any) => void
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
  const [allData, setAllData] = useState<Array<any>>([])

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const toggleModal = (data: number) => {
    setOpcion(data)
    if (data === 1) {
      setOneData([])
    }
    setShow(!show)
  }

  const getAllPersonas = async () => {
    const response = await GetRoute('Persona/all')
    setAllData(response.data)
    console.log(response)
  }

  useEffect(() => {
    getAllPersonas()
    // console.log('entro')
  }, [])

  const postStorePersonas = async (data:any) => {
    const response = await PostRoute('Persona/create',{...data, tipoPersona:4,genero:2})
    console.log(data)
  }
  const value: any = {
    toggleModal,
    setOpcion,
    handleShow,
    handleClose,
    postStorePersonas,
    oneData,
    opcion,
    show,
    allData,
  }

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}
