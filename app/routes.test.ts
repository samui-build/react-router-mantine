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
          "file": "routes/home.tsx",
          "index": true,
        },
      ]
    `)
  })
})
