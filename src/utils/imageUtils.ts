/**
 * Get the correct image path with base URL
 * This handles the base path for both development and production
 */
export function getImagePath(path: string): string {
  // Remove leading slash if present to avoid double slashes
  const cleanPath = path.startsWith('/') ? path.slice(1) : path
  // Get base URL from Vite (includes trailing slash)
  const baseUrl = import.meta.env.BASE_URL
  // Combine base URL with path
  return `${baseUrl}${cleanPath}`
}

