import {FC, Suspense} from 'react'
import {Route, Routes, Navigate} from 'react-router-dom'
import {MasterLayout} from '../../_metronic/layout/MasterLayout'
import TopBarProgress from 'react-topbar-progress-indicator'
import {DashboardWrapper} from '../pages/dashboard/DashboardWrapper'
// import {MenuTestPage} from '../pages/MenuTestPage'
import {getCSSVariableValue} from '../../_metronic/assets/ts/_utils'
import {WithChildren} from '../../_metronic/helpers'
import BuilderPageWrapper from '../pages/layout-builder/BuilderPageWrapper'
import Rol from '../pages/rol/'
import Gallery from '../pages/gallery/'
import Vista2 from '../pages/vista2/'
import Instalaciones from '../pages/instalaciones/'
import Ayudarte from '../pages/ayudarte/'
import Reservas from '../pages/reservas/'
import Check from '../pages/check/'
import AdminHabitacion from '../pages/adminHabitacion'
import AdminReservas from '../pages/adminReservas/'
import TipoPersona from '../pages/tipoPersona/'
import ListaPersonal from '../pages/listaPersonal/'
const PrivateRoutes = () => {
  // const ProfilePage = lazy(() => import('../modules/profile/ProfilePage'))
  // const WizardsPage = lazy(() => import('../modules/wizards/WizardsPage'))
  // const AccountPage = lazy(() => import('../modules/accounts/AccountPage'))
  // const WidgetsPage = lazy(() => import('../modules/widgets/WidgetsPage'))
  // const ChatPage = lazy(() => import('../modules/apps/chat/ChatPage'))
  // const UsersPage = lazy(() => import('../modules/apps/user-management/UsersPage'))

  return (
    <Routes>
      <Route element={<MasterLayout />}>
        {/* Redirect to Dashboard after success login/registartion */}
        <Route path='auth/*' element={<Navigate to='/dashboard' />} />
        {/* Pages */}
        <Route path='dashboard' element={<DashboardWrapper />} />
        <Route path='builder' element={<BuilderPageWrapper />} />
        <Route path='/rol' element={<Rol />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/vista2' element={<Vista2 />} />
        <Route path='/instalaciones' element={<Instalaciones />} />
        <Route path='/ayudarte' element={<Ayudarte />} />
        <Route path='/reservas' element={<Reservas />} />
        <Route path='/check' element={<Check />} />
        <Route path='/adminHabitacion' element={<AdminHabitacion />} />
        <Route path='/adminReservas' element={<AdminReservas />} />
        <Route path='/tipoPersona' element={<TipoPersona />} />
        <Route path='/listaPersonal' element={<ListaPersonal />} />
        {/* Page Not Found */}
        <Route path='*' element={<Navigate to='/error/404' />} />
      </Route>
    </Routes>
  )
}

const SuspensedView: FC<WithChildren> = ({children}) => {
  const baseColor = getCSSVariableValue('--kt-primary')
  TopBarProgress.config({
    barColors: {
      '0': baseColor,
    },
    barThickness: 1,
    shadowBlur: 5,
  })
  return <Suspense fallback={<TopBarProgress />}>{children}</Suspense>
}

export {PrivateRoutes}
