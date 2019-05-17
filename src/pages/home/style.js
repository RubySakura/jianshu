import styled from 'styled-components';

export const HomeWrapper = styled.div`
    width: 960px;
    margin: 0 auto;
    overflow: hidden;
`;

export const HomeLeft = styled.div`
    width: 625px;
    margin-right: 40px;
    margin-top: 30px;
    float: left;
    .banner-img {
        width: 625px;
    }
`;

export const HomeRight = styled.div`
    width: 280px;
    margin-top: 30px;
    float: right;
`;

export const TopicWrapper = styled.div`
    padding: 20px 0 10px 0;
    overflow: hidden;
    margin-left: -18px;
    border-bottom: 1px solid #dcdcdc;
`;

export const TopicItem = styled.div`
    float: left;
    background: #f7f7f7;
    height: 32px;
    line-height: 32px;
    font-size: 14px;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    padding: 0 10px;
    margin-left: 18px;
    margin-bottom: 18px;
`;

export const ListItem = styled.div`
    padding: 20px 0;
    border-bottom: 1px solid #dcdcdc;
    overflow: hidden;
    .pic {
        display: block;
        width: 125px;
        height: 100px;
        float: right;
        border-radius: 10px;
    }
`;

export const ListInfo = styled.div`
    width: 500px;
    float: left;
    h3 {
        font-size: 18px;
        line-height: 27px;
        font-weight: 700;
        color: #333;
    }
    p {
        font-size: 13px;
        line-height: 24px;
        color: #999;
    }
`;

export const RecommendWrapper = styled.div`
    margin: 30px 0;
    width: 280px;
`;

export const RecommendItem = styled.div`
    width: 280px;
    height: 50px;
    background-image: url(${(props) => props.imgURL});
    background-size: contain;
`;

export const BackTop = styled.div`
    position: fixed;
    width: 60px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    right: 100px;
    bottom: 100px;
    border: 1px solid #dcdcdc;
`;