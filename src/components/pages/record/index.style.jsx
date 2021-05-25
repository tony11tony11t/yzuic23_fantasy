import styled  from 'styled-components'

export const RecordPhotoContainer = styled.div`

    img{
        display     : inline-block;
        width       : 48%;
        position    : relative;
        margin      : 20px 0 20px 2%;

        @media ${({theme}) => theme.mediaQueries.bellow980} {
            margin  : 10px 0;
            width   : 100%;
        }
        

        &:nth-child(odd){
            margin  : 20px 2% 20px 0;

            @media ${({theme}) => theme.mediaQueries.bellow980} {
                margin  : 10px 1% 10px 0;
            }
        }
    }
`