import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { TextField, InputBase } from '@material-ui/core';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { useDispatch, useSelector } from 'react-redux';
import { getAllData } from '../../store/app/action';

interface ISearchDropdownProps {
    handleChange: any;
    handleSearch: any;
}

export const SearchDropdown = ({ handleChange, handleSearch }: ISearchDropdownProps) => {

    // const dispatch = useDispatch();
    // const data = useSelector((state: any)=> state.app.searchData);

    // const [ searchInp, setSearchInp ] = useState<string>("");

    // const courseArr = new Array(5).fill(data.course);
    // console.log(courseArr)
    // const userArr = new Array(5).fill(data.users);
    // console.log(userArr)

    // const allData = courseArr.concat(userArr);

    // useEffect(()=>{
    //     dispatch(getAllData(searchInp))
    // }, [])
    
    return (
        <Container>
            {/* <Autocomplete
                id="free-solo-demo"
                freeSolo
                options={allData?.map((option) => option.title)}
                renderInput={(params) => ( */}
                    <InputBase
                            placeholder="Search skills, subjects or software"
                            onChange={handleChange}
                            onKeyPress={handleSearch}
                            // {...params}
                        />
                {/* // <TextField {...params} label="freeSolo" margin="normal" variant="outlined" />
                )} */}
            {/* /> */}
        </Container>
    )
}

const Container = styled.div`
    width: 100%;
`;
