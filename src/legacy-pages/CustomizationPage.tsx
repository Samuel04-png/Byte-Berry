import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { selectedServiceAtom, customizationsAtom, projectDescriptionAtom } from '@/store/order-store'
import { FeatureToggle } from '@/components/customization/FeatureToggle'
import { HostingSelector } from '@/components/customization/HostingSelector'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PRICING_DATA } from '@/data/pricing-data'
import { ArrowRight, ArrowLeft, Sparkles } from 'lucide-react'
import {
  Bot,
  BarChart3,
  CreditCard,
  Smartphone,
  UserCheck,
  MessageCircle,
  Monitor,
  Users,
  Database,
} from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

// Website-specific add-ons
const websiteAddOns = [
  {
    id: 'ai-chatbot',
    label: 'AI Chatbot',
    description: 'Automated customer support with natural language processing',
    icon: Bot,
    tooltip: 'AI Chatbot - Automated customer support with natural language processing that can handle common queries 24/7',
  },
  {
    id: 'ai-assistant',
    label: 'AI Assistant',
    description: 'Intelligent assistant for dashboards and analytics',
    icon: Bot,
    tooltip: 'AI Assistant - Intelligent assistant that helps users navigate dashboards and provides insights from analytics data',
  },
  {
    id: 'payment-gateway',
    label: 'Payment Gateway Integration',
    description: 'Secure online payment processing',
    icon: CreditCard,
  },
  {
    id: 'analytics-dashboard',
    label: 'Analytics Dashboard',
    description: 'Comprehensive data visualization and insights',
    icon: BarChart3,
  },
  {
    id: 'user-authentication',
    label: 'User Authentication',
    description: 'Secure login and user management',
    icon: UserCheck,
  },
  {
    id: 'whatsapp-bot',
    label: 'WhatsApp Bot',
    description: 'Automated WhatsApp messaging and support',
    icon: MessageCircle,
  },
]

// Mobile app-specific add-ons
const mobileAppAddOns = [
  {
    id: 'offline-mode',
    label: 'Offline Mode',
    description: 'App functionality without internet connection',
    icon: Smartphone,
  },
  {
    id: 'analytics-dashboard',
    label: 'Analytics Dashboard',
    description: 'Comprehensive data visualization and insights',
    icon: BarChart3,
  },
  {
    id: 'payment-gateway',
    label: 'Payment Gateway Integration',
    description: 'Secure in-app payment processing',
    icon: CreditCard,
  },
  {
    id: 'user-authentication',
    label: 'User Authentication',
    description: 'Secure login and user management',
    icon: UserCheck,
  },
  {
    id: 'whatsapp-bot',
    label: 'WhatsApp Bot',
    description: 'Automated WhatsApp messaging and support',
    icon: MessageCircle,
  },
]

// Consultancy-specific add-ons
const consultancyAddOns = [
  {
    id: 'analytics-dashboard',
    label: 'Analytics Dashboard',
    description: 'Comprehensive data visualization and insights',
    icon: BarChart3,
  },
  {
    id: 'user-authentication',
    label: 'User Authentication',
    description: 'Secure login and user management',
    icon: UserCheck,
  },
]

// Enterprise-specific add-ons
const enterpriseAddOns = [
  {
    id: 'ai-assistant',
    label: 'AI Assistant',
    description: 'Intelligent assistant for dashboards and analytics',
    icon: Bot,
    tooltip: 'AI Assistant - Intelligent assistant that helps users navigate dashboards and provides insights from analytics data',
  },
  {
    id: 'analytics-dashboard',
    label: 'Analytics Dashboard',
    description: 'Comprehensive data visualization and insights',
    icon: BarChart3,
  },
  {
    id: 'payment-gateway',
    label: 'Payment Gateway Integration',
    description: 'Secure payment processing',
    icon: CreditCard,
  },
  {
    id: 'user-authentication',
    label: 'User Authentication',
    description: 'Secure login and user management',
    icon: UserCheck,
  },
]

const websiteHostingOptions = [
  { value: 'basic', label: 'Basic', price: PRICING_DATA.hostingPlans.website.basic.priceZmw },
  { value: 'pro', label: 'Pro', price: PRICING_DATA.hostingPlans.website.pro.priceZmw },
  { value: 'business', label: 'Business', price: PRICING_DATA.hostingPlans.website.business.priceZmw },
]

const appHostingOptions = [
  { value: 'starter', label: 'Starter', price: PRICING_DATA.hostingPlans.app.starter.priceZmw },
  { value: 'growth', label: 'Growth', price: PRICING_DATA.hostingPlans.app.growth.priceZmw },
  { value: 'scale', label: 'Scale', price: PRICING_DATA.hostingPlans.app.scale.priceZmw },
]

export function CustomizationPage() {
  const [selectedService] = useAtom(selectedServiceAtom)
  const [customizations, setCustomizations] = useAtom(customizationsAtom)
  const [projectDescription, setProjectDescription] = useAtom(projectDescriptionAtom)
  const navigate = useNavigate()

  const handleAddOnToggle = (addOnId: string, checked: boolean) => {
    setCustomizations((prev) => ({
      ...prev,
      addOns: checked
        ? [...(prev.addOns || []), addOnId]
        : (prev.addOns || []).filter((id) => id !== addOnId),
    }))
  }

  const handlePagesChange = (value: string) => {
    const pages = parseInt(value, 10)
    if (!isNaN(pages) && pages > 0) {
      setCustomizations((prev) => ({ ...prev, pages }))
    }
  }

  const handleHostingChange = (value: string) => {
    setCustomizations((prev) => ({
      ...prev,
      hosting: value,
      hostingType: selectedService === 'website' ? 'website' : 'app',
    }))
  }

  const handlePlatformChange = (value: string) => {
    setCustomizations((prev) => ({
      ...prev,
      platform: value as 'ios' | 'android' | 'both',
    }))
  }

  const handleUsersChange = (value: string) => {
    const users = parseInt(value, 10)
    if (!isNaN(users) && users > 0) {
      setCustomizations((prev) => ({ ...prev, numberOfUsers: users }))
    }
  }

  const handleModulesChange = (moduleId: string, checked: boolean) => {
    setCustomizations((prev) => ({
      ...prev,
      modules: checked
        ? [...(prev.modules || []), moduleId]
        : (prev.modules || []).filter((id) => id !== moduleId),
    }))
  }

  const isWebsite = selectedService === 'website'
  const isMobileApp = selectedService === 'mobileApp'
  const isConsultancy = selectedService === 'consultancy'
  const isEnterprise = selectedService === 'enterprise'
  
  const hostingOptions = isWebsite ? websiteHostingOptions : appHostingOptions
  const relevantAddOns = isWebsite 
    ? websiteAddOns 
    : isMobileApp 
    ? mobileAppAddOns 
    : isConsultancy 
    ? consultancyAddOns 
    : enterpriseAddOns

  const enterpriseModules = [
    { id: 'inventory', label: 'Inventory Management', icon: Database },
    { id: 'hr', label: 'HR Management', icon: Users },
    { id: 'finance', label: 'Finance & Accounting', icon: CreditCard },
    { id: 'reporting', label: 'Reporting & Analytics', icon: BarChart3 },
    { id: 'crm', label: 'Customer Relationship Management', icon: UserCheck },
    { id: 'pos', label: 'Point of Sale (POS)', icon: Monitor },
  ]

  return (
    <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 px-4 sm:px-6 py-6 sm:py-8 md:py-12">
      <div className="text-center space-y-3 sm:space-y-4 animate-fade-in">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Customize Your <span className="text-primary">Solution</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-2">
          Select features and options to tailor your service to your exact needs
        </p>
      </div>

      {/* Project Description Section */}
      <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 via-primary/3 to-transparent shadow-sm">
        <CardHeader className="pb-3 sm:pb-6">
          <div className="flex items-center space-x-2">
            <Sparkles className="h-4 w-4 sm:h-5 sm:w-5 text-primary flex-shrink-0" />
            <CardTitle className="text-base sm:text-lg md:text-xl text-primary">Describe Your Project</CardTitle>
          </div>
          <CardDescription className="text-xs sm:text-sm mt-2">
            Help our Byte&Berry Co-pilot understand your needs better. Describe what you want to build, your goals, target audience, and any specific requirements. This helps us provide accurate pricing and generate detailed contracts.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-0 sm:pt-0">
          <div className="space-y-2">
            <Label htmlFor="project-description" className="text-sm sm:text-base text-foreground font-medium">
              Project Description
            </Label>
            <Textarea
              id="project-description"
              placeholder="E.g., I need a website for my restaurant with online ordering, menu display, customer reviews, and integration with delivery services. The site should be mobile-friendly and support multiple payment methods. Target audience is local customers aged 25-45..."
              value={projectDescription}
              onChange={(e) => setProjectDescription(e.target.value)}
              rows={5}
              className="resize-none border-primary/25 focus:border-primary focus:ring-primary/20 transition-colors text-sm sm:text-base min-h-[100px]"
            />
            <p className="text-xs text-muted-foreground leading-relaxed">
              The more details you provide, the better we can understand your needs and provide accurate pricing and detailed documentation.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Website-specific: Pages */}
      {isWebsite && (
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">Pages</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Number of pages for your website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="pages" className="text-sm sm:text-base">Number of Pages</Label>
              <Input
                id="pages"
                type="number"
                min="1"
                value={customizations.pages || ''}
                onChange={(e) => handlePagesChange(e.target.value)}
                placeholder="Enter number of pages"
                className="text-sm sm:text-base min-h-[44px]"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mobile App-specific: Platform Selection */}
      {isMobileApp && (
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">Platform</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Select the platforms for your mobile app</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="platform" className="text-sm sm:text-base">Target Platforms</Label>
              <Select
                value={customizations.platform || 'both'}
                onValueChange={handlePlatformChange}
              >
                <SelectTrigger id="platform" className="min-h-[44px] text-sm sm:text-base">
                  <SelectValue placeholder="Select platform" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="ios">iOS Only</SelectItem>
                  <SelectItem value="android">Android Only</SelectItem>
                  <SelectItem value="both">Both iOS & Android</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Enterprise-specific: Modules */}
      {isEnterprise && (
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">System Modules</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Select the modules you need for your enterprise system</CardDescription>
          </CardHeader>
          <CardContent className="space-y-0">
            {enterpriseModules.map((module) => {
              const isSelected = (customizations.modules || []).includes(module.id)
              return (
                <FeatureToggle
                  key={module.id}
                  id={module.id}
                  label={module.label}
                  checked={isSelected}
                  onCheckedChange={(checked) => handleModulesChange(module.id, checked)}
                  icon={module.icon}
                />
              )
            })}
          </CardContent>
        </Card>
      )}

      {/* Enterprise-specific: Number of Users */}
      {isEnterprise && (
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">Number of Users</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Expected number of users for the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="users" className="text-sm sm:text-base">Number of Users</Label>
              <Input
                id="users"
                type="number"
                min="1"
                value={customizations.numberOfUsers || ''}
                onChange={(e) => handleUsersChange(e.target.value)}
                placeholder="Enter number of users"
                className="text-sm sm:text-base min-h-[44px]"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add-on Features - Service-specific */}
      <Card>
        <CardHeader className="pb-3 sm:pb-6">
          <CardTitle className="text-lg sm:text-xl">Add-on Features</CardTitle>
          <CardDescription className="text-xs sm:text-sm">Enhance your solution with additional features</CardDescription>
        </CardHeader>
        <CardContent className="space-y-0">
          {relevantAddOns.map((addOn) => {
            const isAI = addOn.id.includes('ai')
            const tooltipText = 'tooltip' in addOn ? (addOn.tooltip as string) : undefined
            return (
              <FeatureToggle
                key={addOn.id}
                id={addOn.id}
                label={addOn.label}
                description={addOn.description}
                checked={(customizations.addOns || []).includes(addOn.id)}
                onCheckedChange={(checked) => handleAddOnToggle(addOn.id, checked)}
                icon={addOn.icon}
                showTooltip={isAI}
                tooltipText={tooltipText}
                className={isAI ? "bg-accent/5" : ""}
              />
            )
          })}
        </CardContent>
      </Card>

      {/* Hosting & Maintenance - for Website and Mobile App */}
      {(isWebsite || isMobileApp) && (
        <Card>
          <CardHeader className="pb-3 sm:pb-6">
            <CardTitle className="text-lg sm:text-xl">Hosting & Maintenance</CardTitle>
            <CardDescription className="text-xs sm:text-sm">Choose a hosting or maintenance plan</CardDescription>
          </CardHeader>
          <CardContent>
            <HostingSelector
              hostingType={isWebsite ? 'website' : 'app'}
              value={customizations.hosting}
              onValueChange={handleHostingChange}
              options={hostingOptions}
            />
          </CardContent>
        </Card>
      )}

      <div className="flex flex-col sm:flex-row justify-between gap-4 pt-8 sm:pt-12 pb-4 sm:pb-0 animate-fade-in" style={{ animationDelay: '0.3s' }}>
        <Button 
          variant="outline" 
          onClick={() => navigate('/services')}
          className="w-full sm:w-auto order-2 sm:order-1 min-h-[50px] shadow-md"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button 
          onClick={() => navigate('/summary')} 
          size="lg"
          className="w-full sm:w-auto order-1 sm:order-2 min-h-[50px] shadow-xl"
        >
          Continue to Summary
          <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  )
}

