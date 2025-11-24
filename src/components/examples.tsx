import { Button, Stack } from "@fidely-ui/react"
import { CardComponent } from "./card"
import { Modal } from "./modal"
import { SpinnerComponent } from "./spinner"
import { ComboboxWithPersona } from "./combobox"

export const ExamplesSection = () => {
  return (
    <Stack width={'30%'} mx={"auto"} gap={4}>
      <CardComponent />

      <Modal />

      <SpinnerComponent />

      <ComboboxWithPersona />

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
    </Stack>
  )
}