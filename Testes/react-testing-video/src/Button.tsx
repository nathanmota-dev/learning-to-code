import { ReactNode } from "react";

const Button = ({
    disabled,
    children,
}: {
    disabled: boolean,
    children: ReactNode;
}) => {
    return (
        <button style={{ backgroundColor: disabled ? "red" : "blue" }}>
            {children}
        </button>
    );
};

export default Button;