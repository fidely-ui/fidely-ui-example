import { Button, Flex } from "@fidely-ui/react";

export const Copyright = () => {
  return (
    <Flex
      align={"center"}
      justify={"center"}
    >
      {'Copyright © '}
      <Button
        asChild
        variant={"plain"}
        px={"2"}
        _hover={{
          textDecoration: "underline"
        }}
      >
        <a href="https://fidely-ui.vercel.app/docs/getting-started/installation" target="_blank">
          Fidely UI
        </a>
      </Button>
      {new Date().getFullYear()}.
    </Flex>
  );
}