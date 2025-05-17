import type { Route } from '../../+types/root'
import { Anchor, Stack, Title } from '@mantine/core'
import { Link } from 'react-router'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'New React Router App' }, { name: 'description', content: 'Welcome to React Router!' }]
}

export default function HomepageFeature() {
  return (
    <Stack>
      <Title>Homepage!!</Title>
      <Anchor component={Link} to="/components">
        Components
      </Anchor>
    </Stack>
  )
}
