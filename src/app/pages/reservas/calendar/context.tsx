import {createContext, FC, ReactNode, useState, useEffect} from 'react'
import {GetRoute, PostRoute} from '../../../services/private'
type Props = {
  children?: ReactNode
}

interface Reserva {
  id: number;
  nombre: string;
  fechaIngreso: string;
  fechaSalida: string;
  comentario: string;
  estado: number;
  idEstado: number;
  // Otras propiedades si las tienes
}

interface ContentContextType {
  toggleModal: (data: number) => void;
  show: boolean;
  allData: Array<Reserva>; // Utiliza la interfaz Reserva en lugar de 'any'
  handleClose: () => void;
  postStorePersonas: (data: any) => void;
  step: string;
  setStep: (step: string) => void;
  checkInput: Array<any>;
  setCheckInput: (input: Array<any>) => void;
  texto: string;
  oneData: Reserva | null; // Utiliza la interfaz Reserva en lugar de 'any'
  creaetUpdate: (data: any) => Promise<void>;
  storeCreaetUpdate: (data: any) => Promise<void>;
  handleShow: () => void;
  labelData: Array<{ value: string; label: string }>;
  setLabelData: (data: Array<{ value: string; label: string }>) => void;
  handleSelect: (value: string) => void;
  state: (data: any) => Promise<void>;
  one: (data: any) => Promise<any>;
  reservaData: Reserva[];
  loadReservaData: () => Promise<void>;
}

export const ContentContext = createContext<any | null>(null)

export const ContentProvider: FC<Props> = ({children}) => {
  const texto: String = 'Bienvenido Context'
  const [show, setShow] = useState(false)
  const [allData, setAllData] = useState<any>([])
  const [oneData, setOneData] = useState<any>([])
  const [reservaData, setReservaData] = useState<Reserva[]>([]);
  

  const loadReservaData = async () => {
    try {
      const response = await GetRoute('Reserva/all');
      setReservaData(response.data);
      setAllData(response.length > 0 ? response : []);
    } catch (error) {
      console.error('Error al cargar los datos de reserva: ', error);
    }
  };
  
  useEffect(() => {
    // Llama a la función para cargar los datos de reserva al iniciar el contexto
    loadReservaData();
  }, []);

  const all = async () => {
    const response = await GetRoute('Reserva/all')
    setAllData(response.length > 0 ? response : [])
  }

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const creaetUpdate = async (data: Reserva) => {
    const response = await PostRoute(`Reserva/${!data?.id ? 'create' : 'update'}`, data)
    all()
    handleClose()
    console.log(response.message)
  }

  const one = async (data: any) => {
    const response = await PostRoute(`Reserva/one`, data)
    setOneData(response.length > 0 ? response[0] : [])
    handleShow()
  }

  const state = async (data: any) => {
    const response = await PostRoute(`Reserva/${data?.estado === 1 ? 'destroy' : 'active'}`, data)
    console.log(response.message)
    all()
  }
  const value = {
    show,
    texto,
    allData,
    oneData,
    reservaData, 
    loadReservaData,
    handleClose,
    creaetUpdate,
    handleShow,
    state,
    one,
  }

  useEffect(() => {
    all()
  }, [])
  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>
}
