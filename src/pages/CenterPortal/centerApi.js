// ⚠️ FAKE API: simulates a backend using dummy data (NOT a real server).
// When the real backend is ready, replace the bodies of these functions with fetch().
// Example (endpoint names below are assumptions, match them to your backend):
//
// const API_URL = import.meta.env.VITE_API_URL
// export async function getBookings() {
//   const res = await fetch(`${API_URL}/center/bookings`)
//   if (!res.ok) throw new Error('Failed to load bookings')
//   return res.json()
// }

import { CENTER_INFO, BOOKINGS, SERVICES } from './dummyData'

const FAKE_DELAY_MS = 600
const FAIL_LOADING = false // set to true to test the error screen

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms))

// In-memory "database": lives until the page is refreshed
const bookingsDb = BOOKINGS.map((booking) => ({ ...booking }))

export async function getCenterInfo() {
    await wait(FAKE_DELAY_MS)
    if (FAIL_LOADING) throw new Error('Could not load center data. Please try again.')
    return { ...CENTER_INFO }
}

export async function getBookings() {
    await wait(FAKE_DELAY_MS)
    return bookingsDb.map((booking) => ({ ...booking }))
}

export async function getServices() {
    await wait(FAKE_DELAY_MS)
    return SERVICES.map((service) => ({ ...service }))
}

export async function updateBooking(id, changes) {
    await wait(FAKE_DELAY_MS / 2)
    const index = bookingsDb.findIndex((booking) => booking.id === id)
    if (index === -1) throw new Error('Booking not found.')
    bookingsDb[index] = { ...bookingsDb[index], ...changes }
    return { ...bookingsDb[index] }
}