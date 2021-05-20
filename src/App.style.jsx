import styled from 'styled-components'

export const AppWrapper = styled.div`
    background-color    : #044EB7;
    height              : 100%;
    overflow            : hidden;
`

export const ContainerWrapper = styled.div`
    flex                : 5;
    overflow            : auto;
    background-image    : url(${({bgUrl})=>bgUrl});
    background-size     : 100% 100%;
    height              : calc(100% - 120px);
    padding             : 0 3rem;
`