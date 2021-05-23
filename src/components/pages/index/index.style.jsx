import styled       from 'styled-components'
import {Wrapper}    from '../../../theme/templete'

export const IndexContainer = styled(Wrapper)`

    video{
        position    : absolute;
        top         : 0;
        left        : 0;
        width       : 100%;
        height      : 100%;
        object-fit  : cover;
        z-index     : ${({theme}) => theme.zIndex.lowest};
    }

    h2{
        z-index         : ${({theme}) => theme.zIndex.medium};
        font-weight     : 500;
        margin-bottom   : 10px;
    }

    h5{
        z-index         : ${({theme}) => theme.zIndex.medium};
        font-weight     : 500;
    }
`

export const Mask = styled.div`
    background-color    : ${({theme}) => theme.colors.main};
    z-index             : ${({theme}) => theme.zIndex.lower};
    width               : 100%;
    height              : 100%;
    opacity             : 0.3;
    position            : absolute;
    top                 : 0;
    left                : 0;
    display             : block;
`