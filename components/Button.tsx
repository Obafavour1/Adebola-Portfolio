
import Image from "next/image"
import { HiArrowUpRight } from "react-icons/hi2";

type ButtonProps = {
  type: 'button';
  title: string;
  icon?: string;
  variant: 'btn_talk'
}

const Button = ({ type, title, icon, variant }: ButtonProps) => {
  return (
    <button 
    className={`flexCenter gap-3 rounded full border ${variant}`}
    type={type}
    >
      <label >{title}</label>
      {icon && <HiArrowUpRight />
}
    </button>
  )
}

export default Button