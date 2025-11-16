import { Button, Flex } from "@fidely-ui/react"
import { CardComponent } from "./card"
import { Modal } from "./modal"
import { SpinnerComponent } from "./spinner"

export const ExamplesSection = () => {
  return (
    <Flex justify={"center"} alignItems={"center"} flexDirection={"column"} gap={4}>
      <CardComponent />

      <Modal />

      <SpinnerComponent />

      <Button
        asChild
        variant={"plain"}
        px={"2"}
        _hover={{
          textDecoration: "underline"
        }}
      >
        <a href="https://fidely-ui.vercel.app/docs/getting-started/installation" target="_blank">
          Checkout Fidely UI for more components
        </a>
      </Button>
    </Flex>
  )
}