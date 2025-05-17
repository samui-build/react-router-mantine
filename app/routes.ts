import { type RouteConfig } from '@react-router/dev/routes'
import { getRoutesFeatures } from './features'

export default getRoutesFeatures({ root: './features' }) satisfies RouteConfig
