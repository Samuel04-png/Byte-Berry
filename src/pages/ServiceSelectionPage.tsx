import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { selectedServiceAtom, selectedPackageAtom } from '@/store/order-store'
import { ServiceCard } from '@/components/service/ServiceCard'
import { PackageCard } from '@/components/service/PackageCard'
import { AIRecommendationWidget } from '@/components/ai/AIRecommendationWidget'
import { Button } from '@/components/ui/button'
import { PRICING_DATA } from '@/data/pricing-data'
import { ServiceType } from '@/types/service'
import { ArrowRight } from 'lucide-react'

const services = [
  {
    id: 'website' as ServiceType,
    name: 'Website Development',
    description: 'Responsive, fast, secure websites—from landing pages to portals.',
  },
  {
    id: 'mobileApp' as ServiceType,
    name: 'Mobile App Development',
    description: 'Native iOS & Android with clean UI/UX and offline capability.',
  },
  {
    id: 'consultancy' as ServiceType,
    name: 'IT & Digital Consultancy',
    description: 'Tech stack advisory, project roadmapping, cloud & security reviews.',
  },
  {
    id: 'enterprise' as ServiceType,
    name: 'Enterprise Systems',
    description: 'ERP, POS, HR, or School Management Systems.',
  },
]

export function ServiceSelectionPage() {
  const [selectedService, setSelectedService] = useAtom(selectedServiceAtom)
  const [selectedPackage, setSelectedPackage] = useAtom(selectedPackageAtom)
  const navigate = useNavigate()

  const handleServiceSelect = (serviceType: ServiceType) => {
    setSelectedService(serviceType)
    setSelectedPackage(null)
  }

  const handlePackageSelect = (packageId: string) => {
    setSelectedPackage(packageId)
  }

  const handleContinue = () => {
    if (selectedService && selectedPackage) {
      navigate('/customize')
    }
  }

  const getPackagesForService = () => {
    if (!selectedService) return []
    
    switch (selectedService) {
      case 'website':
        return Object.entries(PRICING_DATA.websitePackages).map(([id, pkg]) => ({
          id,
          ...pkg,
        }))
      case 'mobileApp':
        return Object.entries(PRICING_DATA.mobileAppPackages).map(([id, pkg]) => ({
          id,
          ...pkg,
        }))
      case 'consultancy':
        return Object.entries(PRICING_DATA.consultancyPackages).map(([id, pkg]) => ({
          id,
          ...pkg,
        }))
      case 'enterprise':
        return Object.entries(PRICING_DATA.enterprisePackages).map(([id, pkg]) => ({
          id,
          ...pkg,
        }))
      default:
        return []
    }
  }

  const packages = getPackagesForService()

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Select Your Service</h1>
        <p className="text-lg text-muted-foreground">
          Choose the type of digital solution that fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.id}
            serviceType={service.id}
            name={service.name}
            description={service.description}
            selected={selectedService === service.id}
            onSelect={handleServiceSelect}
          />
        ))}
      </div>

      {selectedService && packages.length > 0 && (
        <div className="space-y-6 mt-12">
          <div className="text-center">
            <h2 className="text-2xl font-bold">Choose Your Package</h2>
            <p className="text-muted-foreground mt-2">
              Select the package that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {packages.map((pkg) => (
              <PackageCard
                key={pkg.id}
                package={pkg}
                selected={selectedPackage === pkg.id}
                onSelect={handlePackageSelect}
                serviceType={selectedService}
              />
            ))}
          </div>
        </div>
      )}

      <AIRecommendationWidget />

      {selectedService && selectedPackage && (
        <div className="flex justify-center pt-8">
          <Button onClick={handleContinue} size="lg" className="min-w-[200px]">
            Continue to Customization
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      )}
    </div>
  )
}

