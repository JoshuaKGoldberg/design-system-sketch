import { Footer, Header, MainContent, Text } from "~/my-design-system";

import styles from "./after.module.css";

export function Home() {
  return (
    <div className={styles.theme}>
      <Header />
      <MainContent>
        <Text as="h1" fontSize="title">
          Welcome to Contoso
        </Text>
        <Text as="p" fontSize="medium">
          Lorem ipsum...
        </Text>
        <Text as="h2" fontSize="large">
          Second Heading
        </Text>
        <Text as="p" fontSize="smol">
          Lorem ipsum...
        </Text>
        <Text as="h2" fontSize="large">
          Third Heading
        </Text>
        <Text as="p" fontSize="smol">
          Lorem ipsum...
        </Text>
        <Text as="p" fontSize="medium">
          In conclusion: yay!
        </Text>
      </MainContent>
      <Footer />
    </div>
  );
}
