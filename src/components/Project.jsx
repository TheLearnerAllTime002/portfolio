import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({
  title,
  description,
  subDescription,
  href,
  image,
  tags,
  id,
  timelineBadge,
  caseStudy,
  setPreview,
}) => {
  const [isHidden, setIsHidden] = useState(false);
  return (
    <>
      <div
        id={`project-${id}`}
        data-project-card
        className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0"
        onMouseEnter={() => setPreview(image)}
        onMouseLeave={() => setPreview(null)}
      >
        <div>
          <p className="text-2xl">{title}</p>
          {timelineBadge && (
            <a className="project-timeline-badge" href={`#${timelineBadge.target}`}>
              <span aria-hidden="true">↗</span>{timelineBadge.label}
            </a>
          )}
          <div className="flex flex-wrap gap-4 mt-3">
            {tags.map((tag) => (
              <img
                key={tag.id}
                src={tag.path}
                alt={tag.name}
                title={tag.name}
                className="w-9 h-9 rounded-lg hover-animation"
              />
            ))}
          </div>
        </div>
        <button
          onClick={() => setIsHidden(true)}
          className="flex items-center gap-1 cursor-pointer hover-animation"
        >
          Read More
          <img src="assets/arrow-right.svg" className="w-5" />
        </button>
      </div>
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      {isHidden && (
        <ProjectDetails
          title={title}
          description={description}
          subDescription={subDescription}
          image={image}
          tags={tags}
          href={href}
          caseStudy={caseStudy}
          timelineBadge={timelineBadge}
          closeModal={() => setIsHidden(false)}
        />
      )}
    </>
  );
};

export default Project;
