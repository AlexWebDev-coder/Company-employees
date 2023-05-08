import { Circle, Container, Linear, SkeletonBox } from "./style";
import { Skeleton } from "@mui/material";

const SkeletonItem = () => {
  return (
    <Container>
      {[...new Array(7)].map((_, index) => (
        <SkeletonBox key={index}>
          <Circle>
            <Skeleton
              animation="wave"
              variant="circular"
              width={72}
              height={72}
            />
          </Circle>
          <Linear>
            <Skeleton animation="wave" height={16} width="144px" />
            <Skeleton
              animation="wave"
              height={12}
              width="80px"
              style={{ marginBottom: 6 }}
            />
          </Linear>
        </SkeletonBox>
      ))}
    </Container>
  );
};

export default SkeletonItem;
