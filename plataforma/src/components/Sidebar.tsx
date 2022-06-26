import { useGetLessonsQuery } from "../graphql/generated";
import Lesson from "./Lesson";

function Sidebar() {
  const { data } = useGetLessonsQuery();

  return (
    <div
      className={`w-full min-h-screen md:w-[348px] bg-gray-700 border-gray-600 border-l hidden md:block`}
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
