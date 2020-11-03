import React from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import FolderIcon from '@material-ui/icons/Folder';

import Divider from '@material-ui/core/Divider';

export interface ListObjectItem {
  eTag: string,
  key: string,
  lastModified: Date,
  size: number
}

export interface S3DirectoryProp {
  s3Objects: ListObjectItem[]
}

const S3Directory = (props: S3DirectoryProp): JSX.Element => (
  <div>
    <List>
      {
        props.s3Objects
          .map((obj) => obj.key)
          .filter((key) => key.endsWith('index.html'))
          .map((entry: string): JSX.Element => (
            <a href={`${entry}`} key={entry}>
              <Divider />
              <ListItem>
                <ListItemAvatar>
                  <Avatar>
                    <FolderIcon />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText primary={entry} />
              </ListItem>
            </a>
          ))
      }
    </List>
    <Divider />
  </div>
);

export default S3Directory;
