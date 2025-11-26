import { Routes, Route, Navigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { selectedServiceAtom } from '@/store/order-store'
import { Layout } from '@/components/layout/Layout'
import { ServiceSelectionPage } from '@/pages/ServiceSelectionPage'
import { CustomizationPage } from '@/pages/CustomizationPage'
import { SummaryPage } from '@/pages/SummaryPage'
import { ContractPage } from '@/pages/ContractPage'

function ProtectedRoute({ children, requiredAtom }: { children: React.ReactNode; requiredAtom: any }) {
  const value = useAtomValue(requiredAtom)
  return value ? <>{children}</> : <Navigate to="/" replace />
}

export function Router() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<ServiceSelectionPage />} />
        <Route
          path="/customize"
          element={
            <ProtectedRoute requiredAtom={selectedServiceAtom}>
              <CustomizationPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/summary"
          element={
            <ProtectedRoute requiredAtom={selectedServiceAtom}>
              <SummaryPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contract"
          element={
            <ProtectedRoute requiredAtom={selectedServiceAtom}>
              <ContractPage />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

