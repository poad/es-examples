import { useEffect, useState } from 'react';

export interface S3DirectoryProp {
    s3keys: string[]
}


const S3Directory = (props: S3DirectoryProp): JSX.Element => {
    const [ entries, setEntries ] = useState<string[]>([]);

    useEffect(() => {
        setEntries(props.s3keys
            .filter(key => key.endsWith('index.html')));

    }, [entries]);

    return (
        <ul>
        {
            entries.map((entry: string): JSX.Element => (<li><a href={`${entry}`}>{entry}</a></li>))
        }
        </ul>
    );
}

export default S3Directory;
