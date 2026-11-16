
import { NavLink, useNavigate } from 'react-router-dom'

const MENU_ITEMS = [
  { label: 'Dashboard', to: '/center-portal', icon: '📊', end: true },
  { label: 'Bookings', to: '/center-portal/bookings', icon: '📥' },
  { label: 'Services', to: '/center-portal/services', icon: '🛠️' },
  { label: 'My Profile', to: '/center-portal/profile', icon: '👤' },
  { label: 'Settings', to: '/center-portal/settings', icon: '⚙️' },
]

const Sidebar = ({ isOpen, onClose }) => {
  const navigate = useNavigate()

  // On mobile/tablet the sidebar covers the content, so close it after navigating
  const closeOnMobile = () => {
    if (window.innerWidth < 1024) onClose()
  }

  const handleLogout = () => {
    closeOnMobile()
    navigate('/login')
  }

  return (
    <>
      {/* Dark backdrop: mobile/tablet only */}
      {isOpen && (
        <div
          onClick={onClose}
          aria-hidden="true"
          className="fixed inset-x-0 bottom-0 top-16 z-30 bg-black/50 lg:hidden"
        />
      )}

      <aside
        inert={!isOpen}
        className={`fixed bottom-0 start-0 top-16 z-40 flex w-64 flex-col overflow-y-auto border-e border-(--cp-line) bg-(--cp-surface) p-5 transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : '-translate-x-full rtl:translate-x-full'
        }`}
      >
        {/* Header */}
        <div className="mb-8">
          <p className="text-lg font-extrabold">Center Portal</p>
          <p className="text-sm text-(--cp-muted)">Manage your service center</p>
        </div>

        {/* Menu */}
        <p className="mb-3 text-xs font-bold tracking-wider text-(--cp-muted)">
          MAIN MENU
        </p>

        <ul className="flex flex-col gap-2">
          {MENU_ITEMS.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.end}
                onClick={closeOnMobile}
                className={({ isActive }) =>
                  `flex items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold transition ${
                    isActive
                      ? 'bg-linear-to-br from-(--cp-accent) to-(--cp-blue) text-white shadow-lg shadow-sky-500/30'
                      : 'text-(--cp-muted) hover:bg-(--cp-surface-2) hover:text-(--cp-text)'
                  }`
                }
              >
                <span aria-hidden="true">{item.icon}</span>
                {item.label}
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Logout */}
        <div className="mt-auto border-t border-(--cp-line) pt-5">
          <button
            type="button"
            onClick={handleLogout}
            className="flex w-full cursor-pointer items-center gap-3 rounded-lg px-3 py-3 text-sm font-bold text-red-400 transition hover:bg-red-500/10"
          >
            <span aria-hidden="true">🚪</span>
            Logout
          </button>
        </div>
      </aside>
    </>
  )
}
export default Sidebar
