import { useContext } from "react";
import { ToggleMenuContext } from "../contexts/ToggleMenuContext";
import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

function Sidebar() {
  const { data } = useGetLessonsQuery();
  const { toggle } = useContext(ToggleMenuContext);

  return (
    <div
      className={`w-full min-h-screen md:w-[348px] md:relative bg-gray-700 border-gray-600 border-l md:block ${
        toggle ? "block absolute z-50" : "hidden"
      }`}
    >
      <aside className="grid grid-col justify-center items-center p-6  ">
        <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
          Cronograma das aulas
        </span>

        <div className="grid grid-col gap-8">
          {data?.lessons.map((lesson) => {
            return (
              <Lesson
                key={lesson.id}
                title={lesson.title}
                slug={lesson.slug}
                availableAt={new Date(lesson.availableAt)}
                type={lesson.lessonType}
              />
            );
          })}
        </div>
      </aside>
    </div>
  );
}

export default Sidebar;
