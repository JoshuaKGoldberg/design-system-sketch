import styles from "./before.module.css";

export function Home() {
  return (
    <div className={styles.theme}>
      {/* eslint-disable-next-line no-header-v1 */}
      <HeaderV1 />
      <MainContent>
        <Text as="h1">Welcome to Contoso</Text>
        <Text as="p">Lorem ipsum...</Text>
        <Text as="h2">Second Heading</Text>
        <Text as="p">Lorem ipsum...</Text>
        <Text as="h2">Third Heading</Text>
        <Text as="p">Lorem ipsum...</Text>
      </MainContent>
      <Footer />
    </div>
  );
}
