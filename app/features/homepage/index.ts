import { index, prefix, route, type RouteConfigEntry } from '@react-router/dev/routes'

export function getRoutesHomepage(options: { root: string; feature: string }): RouteConfigEntry[] {
  return [
    // Index route of the homepage
    index(`${options.root}/${options.feature}/${options.feature}-feature.tsx`),
  ]
}
