
import { useState } from 'react'
import { Routes, Route, Navigate, useLocation } from 'react-router-dom'

import CenterNavbar from '../../components/center/CenterNavbar'
import Sidebar from '../../components/center/Sidebar'
import DashboardHome from './DashboardHome'
import BookingsPage from './BookingsPage'
import CenterPlaceholder from './CenterPlaceholder'
import useCenterData from './useCenterData'
import './centerTheme.css'

const PAGE_TITLES = {
  '/center-portal': 'Center Dashboard',
  '/center-portal/bookings': 'Bookings',
  '/center-portal/services': 'Services',
  '/center-portal/profile': 'My Profile',
  '/center-portal/settings': 'Settings',
}

const CenterPortal = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [theme, setTheme] = useState('dark')
  const location = useLocation()

  const {
    centerInfo,
    bookings,
    services,
    isLoading,
    error,
    actionError,
    busyBookingId,
    retry,
    confirmBooking,
    rejectBooking,
    completeBooking,
  } = useCenterData()

  const toggleSidebar = () => setIsSidebarOpen((prev) => !prev)
  const closeSidebar = () => setIsSidebarOpen(false)
  const toggleTheme = () => setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'))

  const title = PAGE_TITLES[location.pathname] || 'Center Dashboard'
  let content
  if (isLoading) {
    content = (
      <p className="animate-pulse py-20 text-center font-bold text-(--cp-muted)">
        Loading center data...
      </p>
    )
  } else if (error) {
    content = (
      <div className="rounded-2xl border border-red-500/30 bg-(--cp-surface) p-10 text-center">
        <p className="font-bold text-red-400">{error}</p>
        <button
          type="button"
          onClick={retry}
          className="mt-4 cursor-pointer rounded-lg bg-linear-to-br from-(--cp-accent) to-(--cp-blue) px-4 py-2 text-sm font-extrabold text-white transition hover:brightness-110"
        >
          Try again
        </button>
      </div>
    )
  } else {
    content = (
      <Routes>
        <Route
          index
          element={
            <DashboardHome
              centerInfo={centerInfo}
              bookings={bookings}
              services={services}
            />
          }
        />
        <Route
          path="bookings"
          element={
            <BookingsPage
              bookings={bookings}
              busyBookingId={busyBookingId}
              confirmBooking={confirmBooking}
              rejectBooking={rejectBooking}
              completeBooking={completeBooking}
            />
          }
        />
        <Route path="services" element={<CenterPlaceholder title="Services" />} />
        <Route path="profile" element={<CenterPlaceholder title="My Profile" />} />
        <Route path="settings" element={<CenterPlaceholder title="Settings" />} />
        <Route path="*" element={<Navigate to="/center-portal" replace />} />
      </Routes>
    )
  }

  return (
    <div
      data-theme={theme}
      className="center-theme min-h-screen bg-(--cp-bg) text-(--cp-text)"
    >
      <CenterNavbar
        toggleSidebar={toggleSidebar}
        title={title}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <Sidebar isOpen={isSidebarOpen} onClose={closeSidebar} />

      <div
        className={`transition-[margin] duration-300 ease-in-out ${
          isSidebarOpen ? 'lg:ms-64' : ''
        }`}
      >
        <div className="p-4 sm:p-6 lg:p-8">

          {actionError && (
            <p
              role="alert"
              className="mb-4 rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm font-bold text-red-400"
            >
              {actionError}
            </p>
          )}
          {content}
        </div>
      </div>
    </div>
  )
}

export default CenterPortal
