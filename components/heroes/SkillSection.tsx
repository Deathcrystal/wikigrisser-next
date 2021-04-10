import Image from "next/image";
import { Skill } from "../../types/hero";

export function SkillSection({ skill }: { skill: Skill }) {
  return (
    <>
      <div className="grid grid-cols-12">
        <div className="col-span-1">
          <div className="mb-3">
            <Image
              src={"/skills/" + skill.name + ".png"}
              width={50}
              height={50}
            ></Image>
          </div>
        </div>
        <div className="col-span-11">
          <p>{skill.name}</p>
          {skill.descriptionMarkdown ? (
            <div
              dangerouslySetInnerHTML={{ __html: skill.descriptionMarkdown }}
            />
          ) : (
            <>
              <p>
                Cost: {skill.cost}/CD:{skill.cd}/Range:{skill.range}/Span:
                {skill.span}
              </p>
              <p>{skill.description}</p>
            </>
          )}
        </div>
      </div>
    </>
  );
}
