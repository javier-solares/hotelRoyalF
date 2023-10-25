import { useContext, useEffect, useState } from 'react';
import { Button, Modal, Row, Col, Form } from 'react-bootstrap';
import { ContentContext } from './context';
import { useForm } from 'react-hook-form';
import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

type Inputs = {
  nombre: string;
};

function Example() {
  const { show, handleShow, handleClose, creaetUpdate, oneData } = useContext(ContentContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm<Inputs>();

  const [startDate, setStartDate] = useState<Date | null>(null); // Inicialmente establecemos startDate como null

  useEffect(() => {
    if (oneData?.id) {
      setValue('nombre', oneData?.nombre);
      if (oneData?.fecha) {
        setStartDate(new Date(oneData.fecha)); // Establecemos startDate con la fecha existente si está disponible
      } else {
        setStartDate(new Date()); // O establecemos startDate con la fecha actual
      }
    } else {
      setStartDate(new Date()); // Si no hay datos, establecemos startDate con la fecha actual
    }
  }, [oneData]);

  const onSubmit = (data: Inputs) => {
    creaetUpdate({ ...data, id: oneData?.id || null, fecha: startDate }); // Asegúrate de incluir la fecha en el objeto de datos que se enviará
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Crear
      </Button>
  
      <Modal size="lg" show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Formulario de Reservaciones</Modal.Title>
        </Modal.Header>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <Modal.Body>
            <Row className="mb-3">
              <Col lg={6} sm={12}>
                <Form.Group controlId="validationFormik03">
                  <Form.Label>Seleccione la Habitacion</Form.Label>
                  <Form.Control as="select" {...register('nombre', {
                    required: {
                      value: true,
                      message: 'Este campo es requerido',
                    },
                  })} isInvalid={!!errors.nombre}>
                    <option value="">Selecciona una Habitacion</option>
                    <option value="opcion1">Opción 1</option>
                    <option value="opcion2">Opción 2</option>
                    <option value="opcion3">Opción 3</option>
                  </Form.Control>
                  <Form.Control.Feedback type="invalid">
                    {errors?.nombre?.message}
                  </Form.Control.Feedback>
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col lg={6} sm={12}>
                <Form.Group controlId="validationFormik04">
                  {/* <Form.Label>Fecha Ingreso</Form.Label> */}
                  <p>Fecha Ingreso</p>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </Form.Group>
              </Col>
              <Col lg={6} sm={12}>
                <Form.Group controlId="validationFormik05">
                  {/* <Form.Label>Fecha Salida</Form.Label> */}
                  <p>Fecha Salida</p>
                  <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
                </Form.Group>
              </Col>
            </Row>
            <Row className="mb-3">
              <Col>
                <Form.Group controlId="textarea">
                  <Form.Label>Comentario</Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Ingrese su mensaje" />
                </Form.Group>
              </Col>
            </Row>
          </Modal.Body>
          <Modal.Footer className="d-flex justify-content-between">
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button variant="primary" type="submit">
              Reservar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  );
  
  
}

export default Example;
