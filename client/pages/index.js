import MainLayout from "../components/MainLayout/MainLayout";
import selectTranslate from "../utils/selectTranslate";

export default function Index() {
  return (
    <MainLayout
      title={selectTranslate().Pages.index.Meta.title}
      keywords={selectTranslate().Pages.index.Meta.keywords}
    >
      <div>123</div>
    </MainLayout>
  );
}
