import { Avatar } from '@mui/material';
import React from 'react'
import { PostItem } from '../models/PostItems';
import './Post.css'
import HomeIcon from '@mui/icons-material/Home';


const Post:React.FC<PostItem>=(props) => {
    console.log(props);
  
    return (
      <div className="post">
          <div className='post_avatar'>
              <Avatar src='https://i.redd.it/i2zxtsfbk7681.png' />
          </div>
          <div className="post_body">
              <div className="post_header">
                  <div className="header_text">
                      <h3>
                          Eric andrews 
                          <span className='post_headerSpecial'>@indigold69</span>
                      </h3>
                  </div>
                  <div className="post_headerDescription">
                      <p> just seen 2 fat bitches twerkin at chik fil a</p>
                  </div>
              </div>
              <div className="post_footer">
                 <HomeIcon fontSize="small"/> 
                 <HomeIcon fontSize="small"/>
                 <HomeIcon fontSize="small"/>
                 <HomeIcon fontSize="small"/>
                 
              </div>
          </div>
    
      </div>
    );
  };

export default Post
