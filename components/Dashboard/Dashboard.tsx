import * as React from 'react';
import styles from './Dashboard.module.css';

const Dashboard: React.FC = ({children}) => {
    return (
        <div className={styles.dashboard}>
            {children}
        </div>
    )
}

export default Dashboard;