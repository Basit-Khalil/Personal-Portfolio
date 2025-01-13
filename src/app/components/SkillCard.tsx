import Image from 'next/image';

// Define the types for the props
interface SkillCardProps {
  logo: string;        // Logo is expected to be a string (URL or path to image)
  name: string;        // Name of the skill
  description: string; // Description of the skill
}

const SkillCard: React.FC<SkillCardProps> = ({ logo, name, description }) => {
  return (
    <div className="skill-card">
      <Image src={logo} alt={`${name} logo`} width={80} height={80} className="rounded-md" />
      <h3 className="skill-card-title">{name}</h3>
      <p className="skill-card-description">{description}</p>
    </div>
  );
};

export default SkillCard;

