import FullCalendar from '@fullcalendar/react'
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import esLocale from '@fullcalendar/core/locales/es'
import {Card} from 'react-bootstrap'

const Calendar = () => {
  let handleShow: any;
  let handleClose: any;
  const openModal = (info: any) => {
    console.log(info)
  }

  const OpenEvent = (data: any) => {
    console.log(data)
    handleShow(data.event.id);
  }

  return (
    <Card>
      <Card.Body>
        <FullCalendar
          plugins={[dayGridPlugin, interactionPlugin]}
          initialView='dayGridMonth'
          weekends={true}
          editable
          selectable
          selectMirror
          dayMaxEvents
          nowIndicator
          themeSystem='bootstrap'
          eventClick={OpenEvent}
          validRange={{start: new Date()}}
          locale={esLocale}
          dateClick={(info) => openModal(info)} // Añadido aquí
        />
      </Card.Body>
    </Card>
  )
}

export default Calendar