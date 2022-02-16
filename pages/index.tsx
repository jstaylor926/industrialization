import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {getTitle} from "../utils/tempFunctions";
import * as React from 'react';

const initialStories = [
    {
        title: 'React',
        url: 'https://reactjs.org/',
        author: 'Jordan Walke',
        num_comments: 3,
        points: 4,
        objectID: 0,
    },
    {
        title: 'Redux',
        url: 'https://redux.js.org/',
        author: 'Dan Abramov, Andrew Clark',
        num_comments: 2,
        points: 5,
        objectID: 1,
    },
];


const getAsyncStories = () =>
    new Promise((resolve) =>
        setTimeout(
            () => resolve({ data: { stories: initialStories }}),
            2000
        )
    )

const useSemiPersistentState = (key: any, initialState: any) => {
    const [value, setValue] = React.useState(
        localStorage.getItem(key) || initialState
    );

    React.useEffect(() => {
        localStorage.setItem(key, value);
    }, [value, key]);

    return [value, setValue];
};

const Home: NextPage = () => {
    const [searchTerm, setSearchTerm] = useSemiPersistentState('search', 'React');

    const pageTitle = getTitle('Title: Home')
  return (
    <div className={styles.container}>
      <h1>{pageTitle}</h1>
    </div>
  )
}

export default Home
