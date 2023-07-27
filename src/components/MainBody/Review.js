import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import "./Review.css";
import ThumbUpAltOutlinedIcon from '@mui/icons-material/ThumbUpAltOutlined';
import { Avatar } from '@mui/material';
import ThumbDownAltOutlinedIcon from '@mui/icons-material/ThumbDownAltOutlined';
import Rating from '@mui/material/Rating';
import profile from "./../Header/profile.jpg"


export default function Review() {
    return (
        <Card sx={{ maxWidth: 800 }} className='avatar'>
            {/* <CardMedia
        sx={{ height: 140 }}
        image="/static/images/cards/contemplative-reptile.jpg"
        title="green iguana"
      /> */}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    Featured review
                </Typography>
                <div className="jasonCard">
                    <Avatar
                        alt="Remy Sharp"
                        src={profile}
                        sx={{ width: 79, height: 79 }}
                    />
                    <div className="james">
                        <div className="name">Jason </div>
                        <p>35 courses</p>
                        <p>9 reviews</p>
                    </div>
                </div>
                <div className='ratingBox'>  <Rating
                    name="read-only" readOnly
                    value={4} />
                    <span className='time'>4 years ago</span></div>
                <br />
                <Typography variant="body2" color="text.secondary">
                    Max is a fantastic instructor, providing in depth explanations of concepts to help you learn. I appreciate that in most instances he provides a starting and ending package to at first give you a boost, and then to allow you to compare or troubleshoot your own work against his. Take the time to not only dive into his lessons, but explore on your own. You will grasp the concepts he teaches quickly!
                </Typography>
            </CardContent>
            <CardActions className='like'>
                <Button className='small' size="small"><ThumbUpAltOutlinedIcon className='black'/></Button>
                <Button className='small' size="small"><ThumbDownAltOutlinedIcon className='black' /></Button>
            </CardActions>
        </Card>
    );
}