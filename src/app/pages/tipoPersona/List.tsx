import React, {useContext, Fragment} from 'react'
import {Row, Col, Card, ListGroup} from 'react-bootstrap'
import {ContentContext} from './context'

const List = () => {
  const {allData} = useContext(ContentContext)

  // Datos de ejemplo con imágenes y nombres de personas

  return (
    <Fragment>
      <Row>
        {allData.map((persona) => (
          <Col key={persona.id} md={4} className='d-flex justify-content-center align-items-center'>
            <Card style={{width: '18rem'}}>
              <Card.Img variant='top' src={persona.imagen} alt={persona.nombre} />
              <Card.Body>
                <Card.Title>{persona.nombre}</Card.Title>
                {/* <p>23 Años</p>
                <p>Soltero</p> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Fragment>
  )
}

export default List
