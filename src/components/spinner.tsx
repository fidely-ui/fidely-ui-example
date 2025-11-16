import { Box, Spinner, Text } from "@fidely-ui/react"

export const SpinnerComponent = () => {
  return (
    <Box display={"flex"} justifyContent={"center"} flexDirection={"column"} alignItems={"center"}>
      <Text mb={"3"}>Spinner components</Text>

      <Spinner size={"xl"} />
    </Box>
  )
}
