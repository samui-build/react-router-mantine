import type { RouteConfig } from '@react-router/dev/routes'
import { getRoutesComponents } from './components'
import { getRoutesHomepage } from './homepage'

export function getRoutesFeatures({ root }: { root: string }): RouteConfig {
  return [
    // Homepage
    ...getRoutesHomepage({ feature: 'homepage', root }),
    // Components
    ...getRoutesComponents({ feature: 'components', root }),
  ]
}
