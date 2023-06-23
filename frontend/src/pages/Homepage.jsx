import { Box, Heading, Image, Text } from "@chakra-ui/react";
import { Navbar } from "../components/Homepage/Navbar";
import note from "../assets/note.png";



export default function HomePage() {

    return <Box display="flex" justifyContent="flex-end" padding={8}>

        <Heading mt={16} textAlign={"center"} fontSize='3xl'>Note Making App</Heading>

        <Image right={0} positon={"absolute"} w={700} src={note} />

        <Text mt={8} maxW={"50%"} textAlign={"justify"} fontSize='3xl'>
            Note-taking is the process of capturing information from a source or event. This usually takes the form of recording, writing, jotting, paraphrasing, sketching, labelling, outlining, and annotating. Note-taking applications enable users to type, write, and draw on their devices just as they would on paper. Many applications have their own unique features, storage, organization, and sharing capabilities, and it’s up to the user to identify which note-taking application will work best for their needs.
        </Text>

    </Box>

} 