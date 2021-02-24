import styles from '../styles/components/Profile.module.css'


export function Profile() {
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/bruno977.png" alt="Bruno Rodrigues" />
            <div>
                <strong>Bruno Rodrigues</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    level 1
                </p>
            </div>
        </div>
    );
}