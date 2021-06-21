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
import { Typography, makeStyles } from '@material-ui/core';
import { State } from '../../store/tsTypes';
import { useSelector } from 'react-redux';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Card=styled.div`
    padding: 1rem;
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
    height:30px;
    width: 30px;
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

const useStyles = makeStyles(theme => ({
    userImg: {
        width: '50px !important',
        height: '50px !important',
        borderRadius: '15px'
    },
    userName: {
        fontSize: '14px',
        fontWeight: 600,
        lineHeight: '.3rem',
        marginTop: '8px',
        position: 'relative',
        left: '-15px'
    },
    description: {
        fontSize: '12px',
        color: '#95a1bc',
        position: 'relative',
        left: '-15px'
    },
    textAreaImg: {
        position: 'relative',
        top: '26px',
        left: '12px'
    },
    postBtn: {
        background: '#0073b1',
        height: '25px',
        marginLeft: '10px',
        marginTop: '-25px',
        color: '#fff',

        '&:hover': {
            background: '#006097'
        }
    },
    replyImg: {
        width: '40px !important',
        height: '40px !important',
        borderRadius: '15px',
        position: 'relative',
        left: '.5rem'
    },
    replyInp: {
        paddingTop: '1rem'
    },
    answerBox: {
        marginLeft:"-20px",
        // marginTop: '-25px',

        width: '110%'
    },
    likCom: {
        width: 'auto',
        margin: '-20px 10px 0 -20px',
        fontSize: '11px',
        fontWeight: 600,
        color: '#686b6c'
    },
    likComBox: {
        width: 'auto'
    }
}));

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
    
    const classes = useStyles();
    
    const VideoCommentPoint="point"
    const {firstName , lastName ,_id:_userId}:IUserId = userId;
    // const {}= answers
    const data =useSelector((state:State) => state.user.userDetails)
    
    const {_id:LoggedId} = data
    const [reply,setReply] = React.useState("")
    const handleReply=async ()=>{
        const payload={
            "answer":reply,
            "questionId":_id,
            "userId":LoggedId|| "60c4d0228a7b100f2840d795",
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
                        {/* <img  src="https://via.placeholder.com/168x160" alt="" /> */}
                        <AccountCircleIcon className={classes.userImg}  style={{fontSize:"3em" ,color:"grey"}}/>

                    </ImageHolder>
                    <div>
                        <span> <Typography className={classes.userName} > {firstName} {lastName}</Typography></span>
                        {/* <br />   */}
                        <span className={classes.description}>description</span>
                    </div>
                    <div>
                    <SvgIcon component={MoreHorizIcon}></SvgIcon>
                    </div>
                </NameTag>
                <Text>
                    {question}
                </Text>
                <Text>From the video </Text>
                <hr />
                <Text style={{display:"flex" , justifyContent:"right"}}>
                    <h6>LIKE</h6>
                    <h6>Comment</h6>
                </Text>
                <AnswerPlace>
                    <Reply>

                        <ImageHolder>
                            {/* <img className={classes.textAreaImg} src="https://via.placeholder.com/90x90" alt="" /> */}
                            <AccountCircleIcon className={classes.textAreaImg}  style={{fontSize:"3em",color:"grey"}}/>

                        </ImageHolder>
                        <div className={classes.replyInp}>
                            <textarea placeholder="Add your answer here" value={reply} onChange={(e)=>setReply(e.target.value)} />
                            <div>
                                {reply.length!==0?<Button className={classes.postBtn} onClick={handleReply}>Post</Button>:<></>}
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
    grid-template-rows: 40px auto 20px;
    /* border-bottom: 0.5px solid #aaaaaa; */
    NameTag{
        width: auto;
    }
    img{
        height:50px;
        margin:auto 10px;
    }
`
const AnswerBox=({answer}:IAnswers)=>{
    
    const classes = useStyles();

    if(answer!=undefined){
        
        const {_id,answer:AnswerString, userId}:IAnswerComment = answer
        const {firstName,lastName}:IUser= userId
        
        return(
            <AnswerBoxStyle >
            <NameTag>
                <ImageHolder>
                <img className={classes.replyImg} src="https://via.placeholder.com/168x160" alt=""  />
                </ImageHolder>
                <div>
                    <Typography className={classes.userName} style={{marginLeft:'10px'}}> {firstName} {lastName} </Typography>
                    {/* <br />   */}
                    <span className={classes.description} style={{marginLeft:'10px'}}>description</span>
                </div>
                <div><MoreChange _id={_id} /></div>
            </NameTag>
            <Text style={{display:"grid", gridTemplateColumns:"100px auto" , marginTop:"0px"}}>
                <span></span>
                <Typography className={classes.answerBox} variant="body1"> 
                {AnswerString}
                </Typography>
                <br />
            </Text>
            <Text style={{display:"grid", gridTemplateColumns:"90px auto"}}>
                {/* <div></div> */}
                <span></span>
                <Text className={classes.likComBox} style={{display:"grid" , gridTemplateColumns:"40px  40px" ,placeContent:"flex-start"}}>
                    <Typography className={classes.likCom} variant="overline">Like</Typography>
                    <Typography className={classes.likCom} variant="overline">Comment</Typography>
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
            <Typography  variant="body1"> 
            </Typography>
            <br />
        </Text>
        <Text style={{display:"grid", gridTemplateColumns:"90px auto"}}>
            {/* <div></div> */}
            <span></span>
            <Text style={{display:"grid" , gridTemplateColumns:"40px  40px" ,placeContent:"flex-start"}}>
            <Typography variant="body2">LIKE</Typography>
            <Typography variant="body2">Comment</Typography>
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