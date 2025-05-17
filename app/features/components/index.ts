import { index, prefix, route, type RouteConfigEntry } from '@react-router/dev/routes'

export function getRoutesComponents(options: { feature: string; root: string }): RouteConfigEntry[] {
  return prefix(options.feature, [
    // Index is the 'list' feature
    index(`${options.root}/${options.feature}/${options.feature}-list-feature.tsx`),
    // And we have a 'detail' feature
    route(':component', `${options.root}/${options.feature}/${options.feature}-detail-feature.tsx`),
  ])
}
