import { useAtom } from 'jotai'
import { useNavigate } from 'react-router-dom'
import { selectedServiceAtom, customizationsAtom } from '@/store/order-store'
import { FeatureToggle } from '@/components/customization/FeatureToggle'
import { HostingSelector } from '@/components/customization/HostingSelector'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { PRICING_DATA } from '@/data/pricing-data'
import { ArrowRight, ArrowLeft } from 'lucide-react'
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
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">Customize Your Solution</h1>
        <p className="text-lg text-muted-foreground">
          Select features and options to tailor your service
        </p>
      </div>

      {/* Website-specific: Pages */}
      {isWebsite && (
        <Card>
          <CardHeader>
            <CardTitle>Pages</CardTitle>
            <CardDescription>Number of pages for your website</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="pages">Number of Pages</Label>
              <Input
                id="pages"
                type="number"
                min="1"
                value={customizations.pages || ''}
                onChange={(e) => handlePagesChange(e.target.value)}
                placeholder="Enter number of pages"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Mobile App-specific: Platform Selection */}
      {isMobileApp && (
        <Card>
          <CardHeader>
            <CardTitle>Platform</CardTitle>
            <CardDescription>Select the platforms for your mobile app</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="platform">Target Platforms</Label>
              <Select
                value={customizations.platform || 'both'}
                onValueChange={handlePlatformChange}
              >
                <SelectTrigger id="platform">
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
          <CardHeader>
            <CardTitle>System Modules</CardTitle>
            <CardDescription>Select the modules you need for your enterprise system</CardDescription>
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
          <CardHeader>
            <CardTitle>Number of Users</CardTitle>
            <CardDescription>Expected number of users for the system</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <Label htmlFor="users">Number of Users</Label>
              <Input
                id="users"
                type="number"
                min="1"
                value={customizations.numberOfUsers || ''}
                onChange={(e) => handleUsersChange(e.target.value)}
                placeholder="Enter number of users"
              />
            </div>
          </CardContent>
        </Card>
      )}

      {/* Add-on Features - Service-specific */}
      <Card>
        <CardHeader>
          <CardTitle>Add-on Features</CardTitle>
          <CardDescription>Enhance your solution with additional features</CardDescription>
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
          <CardHeader>
            <CardTitle>Hosting & Maintenance</CardTitle>
            <CardDescription>Choose a hosting or maintenance plan</CardDescription>
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

      <div className="flex justify-between pt-8">
        <Button variant="outline" onClick={() => navigate('/')}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back
        </Button>
        <Button onClick={() => navigate('/summary')} size="lg">
          Continue to Summary
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </div>
  )
}

