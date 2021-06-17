import axios from 'axios';
import React from 'react'
import styled from 'styled-components';
import { IComments } from './Test';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SvgIcon from '@material-ui/core/SvgIcon';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Typography } from '@material-ui/core';
const Card=styled.div`
    padding: 10px;
    display: grid;
    grid-template-rows: 70px 1fr 1fr 5px 40px auto;
    margin: auto;
    margin-top: 10px;
    width:90%;
    grid-gap: 10px;
    border:1px solid black;
    height: auto;
    /* height: 700px; */
    img{
        height: 60px;
        border-radius: 50%;
    }
`

const NameTag=styled.div`
    display: grid;
    grid-template-columns: 12% 75% 10%;
    
`

const Text=styled.div`
    height: auto;
    /* padding-left: 2%; */
    h6{
        margin: auto 10px
    }
`

const ImageHolder=styled.div`
    border-radius: 50%;
    height:50px;
`
const Reply = styled.div`
    display: grid;
    width: 100%;
    background-color: #eeeeee;
    grid-template-columns: 60px 1fr;
    textarea{
        margin: 10px;
        width: 95%;
    }
    img{
        height:40px;
        margin: 20% 20% ;
        padding: auto;
    }
`

const AnswerPlace = styled.div`
    display: grid;
    grid-template-rows : auto;
    /* background-color: ; */
    background-color: #eeeeee;
`

interface IQuestionAnswer extends IComments{
    
}

interface IUserId{
    firstName:string ;
    lastName:string;
    _id:string
}

interface IUser{
    _id:string;
    firstName:string;
    lastName:string;
}

interface IAnswerComment{
    _id:string;
    answer:string;
    userId:IUser
}

interface IAnswers{
    _id:string;
    answer:IAnswerComment
}


// const Button= styled.Button`
//     color: white;
//     background-color: #0073b1;
//     padding: 0.5% 5%;
// `

export default function QuestionNAnswer({userId,_id="60c731dd159e6e496cd6a164",answers,question}:IQuestionAnswer){
    
    const VideoCommentPoint="point"
    const {firstName , lastName}:IUserId = userId;
    // const {}= answers
    
    const [reply,setReply] = React.useState("")
    const handleReply=async ()=>{
        const payload={
            "answer":reply,
            "questionId":_id,
            "userId":"60c4d0228a7b100f2840d795",
            "courseId":"60c6e5a4bac4a7241c74f84f"
        }
        console.log(payload);
        let response=await axios.post("http://localhost:5000/add-answer",payload)
        console.log(response);
        setReply("")
    }
    return (
        <>
        <Card>
            <NameTag>
                <ImageHolder>
                <img src="https://via.placeholder.com/168x160" alt="" />
                </ImageHolder>
                <div>
                    <span> <Typography variant="h5"> {firstName} {lastName}</Typography></span>
                    {/* <br />   */}
                    <span>description</span>
                </div>
                <div>
                <SvgIcon component={MoreHorizIcon}></SvgIcon>
                </div>
            </NameTag>
            <Text>
                {question}
            </Text>
            <Text>From the video:{VideoCommentPoint} </Text>
            <hr />
            <Text style={{display:"flex" , justifyContent:"right"}}>
                <h6>LIKE</h6>
                <h6>Comment</h6>
            </Text>
        <AnswerPlace>
            <Reply>

            <ImageHolder>
                <img src="https://via.placeholder.com/90x90" alt="" />
            </ImageHolder>
            <div>
                <textarea placeholder="Add your answer here" value={reply} onChange={(e)=>setReply(e.target.value)} />
                <div>
                    {reply.length!==0?<Button onClick={handleReply}>Post</Button>:<></>}
                </div>
            </div>
        </Reply>
        {
            answers.length!==0 && answers.map((item:IAnswers)=><AnswerBox key={item._id} {...item}/>)
        }
            </AnswerPlace>
        </Card>
        </>
    )
}


const AnswerBoxStyle= styled.div`
    width: 100%;
    margin: 10px auto;
    display: grid;
    grid-template-rows: 70px auto 20px;
    border-bottom: 0.5px solid #aaaaaa;
    NameTag{
        width: auto;
    }
    img{
        height:50px;
        margin:auto 10px;
    }
`
const AnswerBox=({answer}:IAnswers)=>{
    if(answer!=undefined){

        const {_id,answer:AnswerString, userId}:IAnswerComment = answer
        const {firstName,lastName}:IUser= userId
        
        return(
            <AnswerBoxStyle >
            <NameTag>
                <ImageHolder>
                <img src="https://via.placeholder.com/168x160" alt=""  />
                </ImageHolder>
                <div>
                    <Typography variant="body1"> {firstName} {lastName} </Typography>
                    {/* <br />   */}
                    <span>description</span>
                </div>
                <div><MoreChange _id={_id} /></div>
            </NameTag>
            <Text style={{display:"grid", gridTemplateColumns:"100px auto"}}>
                <span></span>
                <Typography variant="body1"> 
                {AnswerString}
                </Typography>
                <br />
            </Text>
            <Text style={{display:"grid", gridTemplateColumns:"90px auto"}}>
                {/* <div></div> */}
                <span></span>
                <Text style={{display:"grid" , gridTemplateColumns:"40px  40px" ,placeContent:"flex-start"}}>
                <Typography variant="overline">LIKE</Typography>
                <Typography variant="overline">Comment</Typography>
                </Text>
            </Text>
        </AnswerBoxStyle>
    )
}else{
    return(
        <AnswerBoxStyle >
        <NameTag>
            <ImageHolder>
            <img src="https://via.placeholder.com/168x160" alt=""  />
            </ImageHolder>
            <div>
                <Typography variant="body1">  </Typography>
                {/* <br />   */}
                <span>description</span>
            </div>
            <div><MoreChange  /></div>
        </NameTag>
        <Text style={{display:"grid", gridTemplateColumns:"100px auto"}}>
            <span></span>
            <Typography variant="body1"> 
            </Typography>
            <br />
        </Text>
        <Text style={{display:"grid", gridTemplateColumns:"90px auto"}}>
            {/* <div></div> */}
            <span></span>
            <Text style={{display:"grid" , gridTemplateColumns:"40px  40px" ,placeContent:"flex-start"}}>
            <Typography variant="overline">LIKE</Typography>
            <Typography variant="overline">Comment</Typography>
            </Text>
        </Text>
    </AnswerBoxStyle>
)
}
}


const MoreChange = ({_id}:any) =>{
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDelete= async ()=>{
        let response= await axios.delete(`http://localhost:5000/delete-answer/${_id}`);
        console.log(response);

  }
  const handleClose = () => {
    setAnchorEl(null);
    handleDelete()
  };
    return(
        <div>
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
      <SvgIcon component={MoreVertIcon}></SvgIcon>
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleDelete}>Delete</MenuItem>
      </Menu>
    </div>
    )
}