import Layout from "@/components/layout";
import HomePage from "./home/home";

export default function Home() {
  return (
    <Layout title="Home | CozQuiz" footer margintop={25}>
      <HomePage />
    </Layout>
  );
}
