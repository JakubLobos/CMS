import { CardWrapper } from "../Card.style";

export const Card = ({ title, postIMG, datePublished, content, slug }) => {
    return (
        <CardWrapper>
                <h1 id={postIMG}>{title}</h1>
                <h3>{content}</h3>
                <img alt="zdjecie posta" src={postIMG} />
                <p>opublikowano: {datePublished}</p>    
        </CardWrapper>
    );
};
