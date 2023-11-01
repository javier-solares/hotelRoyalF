import { createContext, FC, ReactNode, useState, useEffect } from 'react';
import { GetRoute, PostRoute } from '../../services/private';

type Props = {
  children?: ReactNode;
};
interface Data {
  id: number;
  idEstado: number;
  // Otras propiedades si es necesario
}
interface ContentContextType {
  toggleModal: (data: number) => void;
  show: boolean;
  texto: string;
  allData: any[];
  oneData: any;
  handleClose: () => void;
  creaetUpdate: (data: any) => Promise<void>;
  handleShow: () => void;
  labelData: Array<{ value: string; label: string }>;
  setLabelData: (data: Array<{ value: string; label: string }>) => void;
  handleSelect: (value: string) => void;
  // state: (data: any) => Promise<void>;
  one: (data: any) => Promise<any>;
  Actions: (data: Data) => Promise<void>;
}

export const ContentContext = createContext<ContentContextType>({} as ContentContextType);

export const ContentProvider: FC<Props> = ({ children }) => {
  const texto: string = 'Bienvenido Context';
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState<any[]>([]);
  const [oneData, setOneData] = useState<any>([]);
  const [opcion, setOpcion] = useState<number>(0);
  const [labelData, setLabelData] = useState<Array<{ value: string; label: string }>>([]);


  const all = async () => {
    const response = await GetRoute('TipoHabitacion/all');
    setAllData(response.data);
  };

  const handleSelect = (value: string) => {
    console.log(`Seleccionaste: ${value}`);
  };

  useEffect(() => {
    const fetchLabelData = async () => {
      try {
        const response = await GetRoute('TipoHabitacion/label');
        if (response.response === 1 && response.data) {
          setLabelData(response.data);
        }
      } catch (error) {
        console.error('Error al obtener opciones: ', error);
      }
    };

    fetchLabelData();
  }, []);

  const toggleModal = (data: number) => {
    setOpcion(data);
    if (data === 1) {
      setOneData([]);
    }
    setShow(!show);
  };

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const creaetUpdate = async (data: any) => {
    const response = await PostRoute(`TipoHabitacion/${!data?.id ? 'create' : 'update'}`, {...data, usuario:'81816'});
    all();
    handleClose();
    console.log(response.message);
};


  const one = async (data: any) => {
    const response = await PostRoute('TipoHabitacion/one', {id: data.id});
    setOneData(response.data.length? response.data[0]:[]);
    handleShow();
  };

  // const state = async (data: any) => {
  //   const response = await PostRoute(`TipoHabitacion/${data?.estado === 1 ? 'destroy' : 'active'}`, data);
  //   console.log(response.message);
  //   all();
  // };
  const Actions = async (data:any) => {
    const response = await PostRoute(`TipoHabitacion/status`, {
      id: data.id,
      estado: data.idEstado === 1 ? 0 : 1,
    })
    all();
  };

  const value = {
    show,
    texto,
    allData,
    oneData,
    opcion,
    handleClose,
    creaetUpdate,
    handleShow,
    toggleModal,
    Actions,
    one,
    labelData,
    setLabelData,
    handleSelect,
  };

  useEffect(() => {
    all();
  }, []);

  return <ContentContext.Provider value={value}>{children}</ContentContext.Provider>;
};
