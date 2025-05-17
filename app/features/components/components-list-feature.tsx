import type { Route } from './+types/components-list-feature'
import { Anchor, Stack, Title } from '@mantine/core'
import { Link } from 'react-router'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Component List' }, { name: 'description', content: 'This is the Component List' }]
}

export default function ComponentsListFeature() {
  return (
    <Stack>
      <Title>Components List</Title>
      <Anchor component={Link} to="/">
        Home
      </Anchor>
      <Anchor component={Link} to="./test-component">
        Component Detail
      </Anchor>
    </Stack>
  )
}
