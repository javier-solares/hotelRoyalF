import {Fragment, useContext, useEffect, useState} from 'react'
import {ContentContext} from './context'
import {useForm, Controller} from 'react-hook-form'
import {Row, Col, Button, Form, Modal} from 'react-bootstrap'
// import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

export const Formulario = () => {
  const {handleClose, creaetUpdate, oneData, } = useContext(ContentContext)
  const {
      register,
      handleSubmit,
      formState: {errors}, control,setValue,reset,
    } = useForm(),
    {toggleModal, show} = useContext(ContentContext),
    onSubmit = (data: any) => {
      creaetUpdate({...data, id: oneData?.id || null})
    },
    setData = async () => {}

  // const [startDate, setStartDate] = useState(new Date());
  const [startDate, setStartDate] = useState<Date | null>(null)

  return (
    <Fragment>
      <Button variant='primary' className='btn-icon' size='sm' onClick={() => toggleModal(1)}>
        +
      </Button>

      <Modal
        show={show}
        onHide={() => toggleModal(0)}
        size='lg'
        backdrop='static'
        centered
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title className='text-uppercase h1'>Crear Tunos</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row>
              <Col md={4} sm={12}>
                <p>Nombre</p>
                <Form.Group controlId='nombre'>
                  <Form.Control
                    type='text'
                    placeholder='Nombre'
                    {...register('turno', {
                      required: 'Este campo es requerido',
                    })}
                  />
                  {/* {errors.campo1 && <p>{errors.campo1.message}</p>} */}
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <p>Hora Entrada</p>
                <Form.Group controlId='HoraEntrada'>
                  <Form.Control
                    type='text'
                    placeholder='hora entrada'
                    {...register('HoraEntrada', {
                      required: 'Este campo es requerido',
                    })}
                  />
                  {/* {errors.campo1 && <p>{errors.campo1.message}</p>} */}
                </Form.Group>
              </Col>
              <Col md={4} sm={12}>
                <p>Hora Salida</p>
                <Form.Group controlId='HoraSalida'>
                  <Form.Control
                    type='text'
                    placeholder='Hora Salida'
                    {...register('HoraSalida', {
                      required: 'Este campo es requerido',
                    })}
                  />
                  {/* {errors.campo1 && <p>{errors.campo1.message}</p>} */}
                </Form.Group>
              </Col>
            
            </Row>
          </Modal.Body>
          <Modal.Footer className='d-flex justify-content-between'>
            <Button variant='secondary' onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant='primary' type='submit'>
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </Fragment>
  )
}

export default Formulario
