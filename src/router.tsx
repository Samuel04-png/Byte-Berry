import { Routes, Route, Navigate } from 'react-router-dom'
import { useAtomValue } from 'jotai'
import { selectedServiceAtom } from '@/store/order-store'
import { Layout } from '@/components/layout/Layout'
import { HomePage } from '@/pages/HomePage'
import { ServiceSelectionPage } from '@/pages/ServiceSelectionPage'
import { CustomizationPage } from '@/pages/CustomizationPage'
import { SummaryPage } from '@/pages/SummaryPage'
import { ContractPage } from '@/pages/ContractPage'
import { AboutPage } from '@/pages/AboutPage'
import { CaseStudiesPage } from '@/pages/CaseStudiesPage'
import { CaseStudyDetailPage } from '@/pages/CaseStudyDetailPage'
import { ContactPage } from '@/pages/ContactPage'

function ProtectedRoute({ children, requiredAtom }: { children: React.ReactNode; requiredAtom: any }) {
  const value = useAtomValue(requiredAtom)
  return value ? <>{children}</> : <Navigate to="/services" replace />
}

export function Router() {
  return (
    <Layout>
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<HomePage />} />
        
        {/* Service Flow Routes */}
        <Route path="/services" element={<ServiceSelectionPage />} />
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
        
        {/* Public Pages */}
        <Route path="/about" element={<AboutPage />} />
        <Route path="/case-studies" element={<CaseStudiesPage />} />
        <Route path="/case-studies/:id" element={<CaseStudyDetailPage />} />
        <Route path="/contact" element={<ContactPage />} />
        
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Layout>
  )
}

