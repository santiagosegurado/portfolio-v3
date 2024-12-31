import Image from "next/image";
import Button from "../ui/Button";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  miniDescription: string;
  link: string;
}

const ProjectCard = ({
  description,
  image,
  miniDescription,
  title,
  link,
}: ProjectCardProps) => {
  return (
    <article className="w-80 flex flex-col gap-3">
      <div className="flex flex-row justify-between items-center">
        <h3 className="text-secondaryPurple font-semibold">{title}</h3>
        <span className="text-secondaryGray">{miniDescription}</span>
      </div>
      <div className="flex flex-col items-center border border-accentBorder rounded-xl overflow-hidden h-[420px]">
        <Image
          src={image}
          alt="Project 1"
          width={200}
          height={200}
          className="w-full h-auto"
        />
        <div className="p-8 h-full flex flex-col gap-4 w-full justify-between">
          <p className="text-secondaryGray">{description}</p>
          <Button>
            <Link href={link} target="_blank">
              view-project
            </Link>
          </Button>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
