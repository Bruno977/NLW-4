import { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css'


export function Profile() {
    const { level } = useContext(ChallengeContext);
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/bruno977.png" alt="Bruno Rodrigues" />
            <div>
                <strong>Bruno Rodrigues</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    level {level}
                </p>
            </div>
        </div>
    );
}