import { DefaultTheme } from "styled-components";

const primary : DefaultTheme = {
    colors: {
        app: {
            background: "#F5F5F7",
            formBackground: "#F5F5F7",
        },
        tasks: {
            easy: "#7FC8F8",
            medium: "#FFDF38",
            hard: "#FF5A5F",
            completed: "#DCDCDC",
        },

        shop: {
            available: "#7FC8F8",
            purchased: "#DCDCDC",

        },

        calendar: {
            active: "#FFDF38",
        },

        card: {
            background: "#FFFFFF",
            header: "#DCDCDC",
        },

        text: {
            primary: "#242834",
            secondary: "#585259",
        }
    },
    sizes: {
        desktop: {
            text: {
                title: 20,
                content: 16,
            },
            icon: 36,
            spacing: 24
        },
        mobile: {
            text: {
                title: 20,
                content: 16,
            },
            icon: 36,
            spacing: 24
        }
    }
}

export default primary