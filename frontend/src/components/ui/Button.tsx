
interface ButtonProps {
    variant: "primary" | "secondary";
    size: "sm" | "md" | "lg";
    text: string;
    startIcon?: any;
    endIcon?: any;
    onClick: () => void;
}

const variantStyles = {
    "primary": "bg-purple-600 text-white",
    "secondary": "bg-purple-300 text-purple-600"
}

const sizeStyle = {
    "sm": "p-2",
    "md": "p-4",
    "lg": "p-6"
}

const defaultStyle = "rounded-md"

export const Button = (props: ButtonProps) => {
    return <button className={`${variantStyles[props.variant]} ${defaultStyle} ${sizeStyle[props.size]}`}>{props.text}</button>
}
