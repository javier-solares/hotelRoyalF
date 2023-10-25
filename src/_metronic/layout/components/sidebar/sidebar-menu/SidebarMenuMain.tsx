/* eslint-disable react/jsx-no-target-blank */
import {useIntl} from 'react-intl'
import {SidebarMenuItem} from './SidebarMenuItem'

const SidebarMenuMain = () => {
  const intl = useIntl()

  return (
    <>
      <SidebarMenuItem
        to='/dashboard'
        icon='/media/icons/duotune/art/art002.svg'
        title={intl.formatMessage({id: 'MENU.DASHBOARD'})}
        fontIcon='bi-app-indicator'
      />
      <SidebarMenuItem
        to='/builder'
        icon='/media/icons/duotune/general/gen019.svg'
        title='Layout Builder'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/rol'
        icon='/media/icons/duotune/general/gen024.svg'
        title='Rol'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/gallery'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Galeria'
        fontIcon='bi-layers'
      />
       <SidebarMenuItem
        to='/vista2'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Sobre Nosotros'
        fontIcon='bi-layers'
      />
       <SidebarMenuItem
        to='/instalaciones'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Instalaciones'
        fontIcon='bi-layers'
      />
       <SidebarMenuItem
        to='/ayudarte'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Ayudarte'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/reservas'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Reservas'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/check'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Check'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/adminHabitacion'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Habitacion'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/adminReservas'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Reservas'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/tipoPersona'
        icon='/media/icons/duotune/general/gen025.svg'
        title='tipo Persona'
        fontIcon='bi-layers'
      />
      <SidebarMenuItem
        to='/listaPersonal'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Personal'
        fontIcon='bi-layers'
      />
    </>
  )
}

export {SidebarMenuMain}
