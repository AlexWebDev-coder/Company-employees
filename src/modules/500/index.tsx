import { Container, Image, ResetRequest, Subtitle, Title } from "./styles";
import ServerError500Img from "../../public/img/404.png";

const ServerError500 = () => {
  return (
    <Container>
      <Image src={ServerError500Img} />
      <Title>Какой-то сверхразум все сломал</Title>
      <Subtitle>Постараемся быстро починить</Subtitle>
      <ResetRequest>поробовать снова</ResetRequest>
    </Container>
  );
};

export default ServerError500;
