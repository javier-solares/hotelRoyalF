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
        title='Gallery'
        fontIcon='bi-layers'
      />
       <SidebarMenuItem
        to='/vista2'
        icon='/media/icons/duotune/general/gen025.svg'
        title='Vista2'
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
    </>
  )
}

export {SidebarMenuMain}
