import { Box, Card, Em, Flex, Persona, Text } from "@fidely-ui/react"
import { FaLinkedin } from "react-icons/fa"

export const CardComponent = () => {
  return (
    <Box>
      <Text mb={"3"}>Card and Persona components</Text>
      <Card.Root>
        <Card.Body gap="2">
          <Card.Header>
            <Flex
              justifyContent={'space-between'}
              alignItems={'flex-start'}
            >
              <Persona
                name={"Henry John"}
                title={"title"}
                img={"http://bit.ly/47jPX1D"}
                size="xl"
              />

              <a
                href=""
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin size={'18px'} />
              </a>
            </Flex>
          </Card.Header>
          <Card.Description>
            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in
            a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor
            at Hampden-Sydney College in Virginia, <Em color={"colorPalette.default"}>looked up one of</Em> the more obscure Latin words, consectetur, from a Lorem Ipsum passage,
            and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsu
          </Card.Description>
        </Card.Body>
      </Card.Root>
    </Box>
  )
}
