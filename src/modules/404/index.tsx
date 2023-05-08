import { Container, Image, Subtitle, Title } from "./styles";
import NotFoundImg from "../../public/img/not-found.png";

const NotFound = () => {
  return (
    <Container>
      <Image src={NotFoundImg} />
      <Title>Мы ничего не нашли</Title>
      <Subtitle>Попробуйте скорректировать запрос</Subtitle>
    </Container>
  );
};

export default NotFound;
