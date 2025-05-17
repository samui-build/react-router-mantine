import type { Route } from './+types/components-detail-feature'
import { Stack, Title } from '@mantine/core'

export function meta({}: Route.MetaArgs) {
  return [{ title: 'Component Detail' }, { name: 'description', content: 'This is the Component Detail' }]
}

export default function ComponentsDetailFeature(props: Route.ComponentProps) {
  const component = props.params.component
  return (
    <Stack>
      <Title>Components Detail: {component}</Title>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </Stack>
  )
}
