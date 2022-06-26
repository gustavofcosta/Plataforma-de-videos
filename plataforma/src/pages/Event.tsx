import { useParams } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Video from "../components/Video";

function Event() {
  const { slug } = useParams<{ slug: string }>();
  return (
    <div className="fex flex-col min-h-screen">
      <Header />

      <main className="relativo flex flex-1">
        {slug ? <Video lessonSlug={slug} /> : <div className="flex-1" />}
        <Sidebar />
      </main>
    </div>
  );
}

export default Event;
