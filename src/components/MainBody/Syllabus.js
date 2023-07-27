import React from 'react'
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AssignmentIcon from '@mui/icons-material/Assignment';
import DescriptionIcon from '@mui/icons-material/Description';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import StayCurrentPortraitIcon from '@mui/icons-material/StayCurrentPortrait';
import ClosedCaptionIcon from '@mui/icons-material/ClosedCaption';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import "./Syllabus.css";

const Syllabus = () => {
  return (
    <div className="courseBox">
        <h2>This Course includes:</h2>
        <div className='courseContents'>
            <div className='item'><OndemandVideoIcon/><span className='desciption'>36 hours on-demand video</span></div>
            <div className='item'><AssignmentIcon/><span className='desciption'>Assignments</span></div>
            <div className='item'><DescriptionIcon/><span className='desciption'>47 articles</span></div>
            <div className='item'><FileDownloadIcon/><span className='desciption'>179 downloadable resources</span></div>
            <div className='item'><StayCurrentPortraitIcon/><span className='desciption'>Access on mobile and TV</span></div>
            <div className='item'><ClosedCaptionIcon/><span className='desciption'>Closed captions</span></div>
            <div className='item'><EmojiEventsIcon/><span className='desciption'>Certificate of completion</span></div>
        </div>
    </div>
  )
}

export default Syllabus
