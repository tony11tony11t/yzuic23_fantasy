import styled from 'styled-components'

export const MemberContainer = styled.div`
    flex        : 0 0 ${({flexW}) => `${flexW}%`};
    text-align  : center;
    
    .head{
        width           : 70%;
        border-radius   : 99999px;
    }

    p{
        white-space : pre-line;
    }
`