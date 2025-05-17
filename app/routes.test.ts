import { describe, expect, it } from 'vitest'
import routes from './routes'

describe('routes', () => {
  it('should match the route snapshot', () => {
    // ARRANGE
    // ACT
    // ASSERT
    expect(routes).toMatchInlineSnapshot(`
      [
        {
          "file": "./features/homepage/homepage-feature.tsx",
          "index": true,
        },
        {
          "children": undefined,
          "file": "./features/components/components-list-feature.tsx",
          "index": true,
          "path": "components",
        },
        {
          "children": undefined,
          "file": "./features/components/components-detail-feature.tsx",
          "path": "components/:component",
        },
      ]
    `)
  })
})
