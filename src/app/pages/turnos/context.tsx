import { createContext, FC, ReactNode, useState, useEffect } from 'react';
import { GetRoute, PostRoute } from '../../services/private';

type Props = {
  children?: ReactNode;
};

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
  state: (data: any) => Promise<void>;
  one: (data: any) => Promise<any>;
}

export const ContentContext = createContext<ContentContextType>({} as ContentContextType);

export const ContentProvider: FC<Props> = ({ children }) => {
  const texto: string = 'Bienvenido Context';
  const [show, setShow] = useState(false);
  const [allData, setAllData] = useState<any[]>([]);
  const [oneData, setOneData] = useState<any>([]);
  const [opcion, setOpcion] = useState<number>(0);
  const [labelData, setLabelData] = useState<Array<{ value: string; label: string }>>([]);

  const toggleModal = (data: number) => {
    setOpcion(data);
    if (data === 1) {
      setOneData([]);
    }
    setShow(!show);
  };




  const all = async () => {
    const response = await GetRoute('Turno/all');
    setAllData(response.data);
  };

  const handleSelect = (value: string) => {
    console.log(`Seleccionaste: ${value}`);
  };

  useEffect(() => {
    const fetchLabelData = async () => {
      try {
        const response = await GetRoute('Turno/label');
        if (response.response === 1 && response.data) {
          setLabelData(response.data);
        }
      } catch (error) {
        console.error('Error al obtener opciones: ', error);
      }
    };

    fetchLabelData();
  }, []);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const creaetUpdate = async (data: any) => {
    const response = await PostRoute(`Turno/${!data?.id ? 'create' : 'update'}`, {...data, usuario:'81816'});
    all();
    handleClose();
    console.log(response.message);
};


  const one = async (data: any) => {
    const response = await PostRoute('Turno/one', data);
    setOneData(response.length > 0 ? response[0] : []);
    handleShow();
  };

  const state = async (data: any) => {
    const response = await PostRoute(`Turno/${data?.estado === 1 ? 'destroy' : 'active'}`, data);
    console.log(response.message);
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
    state,
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
