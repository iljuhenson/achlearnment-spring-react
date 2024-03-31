import 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        colors: {
            app: { background: string; formBackground: string };
            calendar: { active: string };
            shop: { purchased: string; available: string };
            text: { secondary: string; primary: string };
            tasks: { medium: string; hard: string; completed: string; easy: string };
            card: { background: string; header: string }
        };
        sizes: {
            desktop: { spacing: number; icon: number; text: { title: number; content: number } };
            mobile: { spacing: number; icon: number; text: { title: number; content: number } }
        };
    }
}