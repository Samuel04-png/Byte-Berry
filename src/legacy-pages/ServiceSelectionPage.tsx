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
    <div className="max-w-7xl mx-auto space-y-8 md:space-y-12 py-6 md:py-8 lg:py-16 px-4 sm:px-6">
      <div className="text-center space-y-3 md:space-y-4 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight">
          Select Your <span className="text-primary">Service</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
          Choose the type of digital solution that fits your needs
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
        <div className="space-y-8 mt-16 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <div className="text-center space-y-2">
            <h2 className="text-3xl md:text-4xl font-bold">
              Choose Your <span className="text-primary">Package</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Select the package that best fits your needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
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
        <div className="flex justify-center pt-12 animate-fade-in px-4" style={{ animationDelay: '0.3s' }}>
          <Button onClick={handleContinue} size="lg" className="w-full sm:w-auto min-w-0 sm:min-w-[280px] shadow-xl">
            Continue to Customization
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      )}
    </div>
  )
}

