import RightAlignedCardTitleStyled from "../RightAlignedCardTitle/RightAlignedCardTitle.styled.tsx";
import CardContentWrapperStyled from "../CardContentWrapper/CardContentWrapper.styled.tsx";
import NewsMessage from "../NewsMessage/NewsMessage.tsx";
import Card from "../Card/Card.tsx";
import {useTheme} from "styled-components";


function NewsCard() {
    const theme = useTheme()

    return (
        <Card headerComponent={<RightAlignedCardTitleStyled>News</RightAlignedCardTitleStyled>}>
            <CardContentWrapperStyled>
                <NewsMessage color={theme.colors.tasks.easy} username={"Sonya"}
                             isRightAligned={false}>
                    Did you see that new revolutionary app?
                </NewsMessage>
                <NewsMessage color={theme.colors.tasks.medium} username={"Steve"}
                             isRightAligned={true}>
                    You mean Achlearnment? I’ve been using this for years!
                </NewsMessage>
                <NewsMessage color={theme.colors.tasks.hard} username={"Ilya"}
                             isRightAligned={false}>
                    You too guys, who’s that guy who made it?
                </NewsMessage>
                <NewsMessage color={theme.colors.tasks.easy} username={"Sonya"}
                             isRightAligned={false}>
                    Ehmmmm, how could you not know that?!?!?!
                </NewsMessage>
                <NewsMessage color={theme.colors.tasks.medium} username={"Steve"}
                             isRightAligned={true}>
                    I think his name is iljuhenson. Go check out his github.
                </NewsMessage>
                <NewsMessage color={theme.colors.tasks.easy} username={"Sonya"}
                             isRightAligned={false}>
                    Nice bit, guys, what a good marketing strategy.
                </NewsMessage>
            </CardContentWrapperStyled>
        </Card>
    );
}

export default NewsCard;