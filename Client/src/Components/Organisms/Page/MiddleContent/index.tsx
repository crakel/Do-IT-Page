import { CONTENT, MIDDLE_IMG_URL } from "@Constant/.";
import Context from "@Molecules/Content";
import Content from "@Organisms/Page/Content";
import { Box, Container } from "./styles";

const MiddleContent = () => {
  return (
    <Box>
      <Container>
        {MIDDLE_IMG_URL.map((item, idx) => (
          <Content text={() => Context(CONTENT[idx + 1])} url={item} />
        ))}
      </Container>
    </Box>
  );
};

export default MiddleContent;
