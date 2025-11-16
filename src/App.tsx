import {
  Box,
  Button,
  Clipboard,
  Em,
  Flex,
  Heading,
  IconButton,
  Input,
  Stack,
  Text
} from '@fidely-ui/react'
import './App.css'
import { ColorModeButton } from './components/color-mode-button'
import { Copyright } from './components/copyright'
import { ExamplesSection } from './components/examples'

function App() {
  return (
    <>
      <Flex as={"nav"} justify={"space-between"} align={"center"} bg={"bg.default"} padding={"15px"} shadow={"sm"}>
        <Heading><Em>Fidely UI</Em></Heading>

        <Flex align={'center'} gap={"1"}>
          <Text>Switch mode</Text>
          <ColorModeButton />
        </Flex>
      </Flex>

      <Box as={'section'} height={'auto'}>
        <Box
          display={'flex'}
          flexDirection={'column'}
          justifyContent={'center'}
          alignItems={'center'}
          p={'15px'}
          width={{ base: '100%', md: '65%' }}
          m={'5rem auto'}
          textAlign={'center'}
        >
          <Heading
            as="h1"
            textStyle={{ base: '3xl', md: '7xl' }}
            textAlign="center"
            color={'orange.9'}
            lineHeight={'1.4em'}
          >
            Built with Fidely UI
          </Heading>

          <Text
            my={'10px'}
            textStyle={{ base: 'lg', md: 'xl' }}
            textAlign={'center'}
            lineHeight={'1.7em'}
          >
            A beautifully crafted React design system powered by Ark UI and Panda CSS, providing accessible, themeable, and production-ready components.
          </Text>

          <Stack
            flexDirection={{ base: 'column', sm: 'row' }}
            alignItems={'center'}
            gap="3"
            mt={'25px'}
            mb={'5px'}
          >
            <Button
              variant={'solid'}
              size={'xl'}
              asChild
              ripple
              px={'30px'}
            >
              <a target="_blank" href={"https://fidely-ui.vercel.app/docs/getting-started/installation"}>Get Started</a>
            </Button>

            <Clipboard.Root value={'npm i @fidely-ui/react'} width={'100%'}>
              <Clipboard.Control>
                <Clipboard.Input asChild>
                  <Input />
                </Clipboard.Input>
                <Clipboard.Trigger asChild>
                  <IconButton variant="outline">
                    <Clipboard.Indicator />
                  </IconButton>
                </Clipboard.Trigger>
              </Clipboard.Control>
            </Clipboard.Root>
          </Stack>
        </Box>
      </Box>

      <ExamplesSection />

      <Box as={"footer"} mt={"8px"}>
        <Copyright />
      </Box>
    </>
  )
}

export default App
