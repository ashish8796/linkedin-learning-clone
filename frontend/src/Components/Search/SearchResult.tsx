import React from 'react';
import { Box, makeStyles, Typography } from '@material-ui/core';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { SearchDispComponent } from './SearchDispComponent';

export default function SearchResult () {

    const classes = useStyles();
    const { search }: any = useParams();

    const {course} = useSelector((state: any) => state.app.searchData);
    
    return (
        <Container>
            <Search>
                {
                    course?.map((c: any) => <SearchDispComponent key={c.id} {...c} />)
                }
            </Search>
        </Container>
    )
}

const Container = styled.div`
    position: relative;
    top: 4rem;
    width: 71rem;
    margin: auto;
    display: flex;
    flex-direction: row-reverse;
`;

const Search = styled.div`
    width: 100%;
`;

const useStyles = makeStyles(theme=>({

}));
