import { Container, Image, ResetRequest, Subtitle, Title } from "./styles";
import NotFoundImg from "../../public/img/404.png";

const NotFound = () => {
  return (
    <Container>
      <Image src={NotFoundImg} />
      <Title>Какой-то сверхразум все сломал</Title>
      <Subtitle>Постараемся быстро починить</Subtitle>
      <ResetRequest>поробовать снова</ResetRequest>
    </Container>
  );
};

export default NotFound;
