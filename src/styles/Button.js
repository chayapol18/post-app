const Button = {
    baseStyle: {
        fontWeight: "400"
    },
    sizes: {
        sm: {
            minWidth: "150px",
            fontSize: "sm",
            padding: "4"
        },
        md: {
            minWidth: "150px",
            fontSize: "md",
            padding: "6"
        },
        lg: {
            minWidth: "150px",
            fontSize: "lg",
            padding: "8"
        }
    },
    variants: {
        primary: {
            bg: "primary.200",
            color: "white",
            ".hover": {
                bg: "primary.100"
            },
            ".focus": {
                boxShadow: "none"
            }
        }
    },
    defaultProps: {}
}

export default Button