import { useState } from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { getServiceRecommendation } from '@/services/gemini-service'
import { Loader2, Sparkles } from 'lucide-react'

export function AIRecommendationWidget() {
  const [description, setDescription] = useState('')
  const [loading, setLoading] = useState(false)
  const [recommendation, setRecommendation] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  const handleGetRecommendation = async () => {
    if (!description.trim()) {
      setError('Please describe your needs first')
      return
    }

    setLoading(true)
    setError(null)
    setRecommendation(null)

    try {
      const result = await getServiceRecommendation(description)
      setRecommendation(result)
    } catch (err) {
      setError('Failed to get recommendation. Please try again.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card className="mt-8">
      <CardHeader>
        <div className="flex items-center space-x-2">
          <Sparkles className="h-5 w-5 text-primary" />
          <CardTitle>Byte&Berry Co-pilot</CardTitle>
        </div>
        <CardDescription>
          Describe your business needs and our AI co-pilot will recommend the best package for you
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <Textarea
          placeholder="E.g., I need a website for my small business with 5 pages, contact form, and online booking..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          className="resize-none"
        />
        <Button
          onClick={handleGetRecommendation}
          disabled={loading || !description.trim()}
          className="w-full"
        >
          {loading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Getting Recommendation...
            </>
          ) : (
            'Get AI Recommendation'
          )}
        </Button>

        {error && (
          <Alert variant="destructive">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        {recommendation && (
          <Alert>
            <AlertTitle>Byte&Berry Co-pilot Recommendation</AlertTitle>
            <AlertDescription className="mt-2 whitespace-pre-wrap">
              {recommendation}
            </AlertDescription>
          </Alert>
        )}
      </CardContent>
    </Card>
  )
}

