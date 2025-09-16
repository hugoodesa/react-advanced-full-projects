import { Container } from "../../components/Container";
import { Counter } from "../../components/counter";
import { Footer } from "../../components/footer";
import { Logo } from "../../components/Logo";
import { Menu } from "../../components/Menu";

type MainTemplateType = {
  children?: React.ReactNode;
};

export function MainTemplate({ children }: MainTemplateType) {
  return (
    <>
      <Container>
        <Logo />
      </Container>

      <Container>
        <Menu />
      </Container>

      {children}

      <Container>
        <Footer />
      </Container>
    </>
  );
}
