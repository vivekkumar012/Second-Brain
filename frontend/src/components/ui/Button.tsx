
interface ButtonProps {
    size: "sm" | "md" | "lg";
    title: string;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

const sizeStyle = {
    "sm": "px-2 py-1",
    "lg": "px-8 py-4",
     "md": "px-4 py-2",
}


export const Button = (props: ButtonProps) => {
    return <button className={sizeStyle[props.size] + " bg-blue-800  cursor-pointer"}>{props.title}</button>
}
