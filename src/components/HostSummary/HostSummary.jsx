import styles from './HostSummary.module.css'

function HostSummary({ hostName, hostingDuration, role, profilePicUrl }) {
  return (
    <div className={styles.hostInfo}>
      <div className={styles.profilePicContainer}>
        <img
          src={profilePicUrl}
          alt={`Hosted by ${hostName}`}
          className={styles.profilePic}
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 12 14"
        aria-hidden="true"
        role="presentation"
        focusable="false"
        style={{ display: 'block', height: '20px', width: '20px' }}
      >
        <linearGradient id="a" x1="8.5%" x2="92.18%" y1="17.16%" y2="17.16%">
          <stop offset="0" stopColor="#e61e4d" />
          <stop offset="0.5" stopColor="#e31c5f" />
          <stop offset="1" stopColor="#d70466" />
        </linearGradient>
        <path
          fill="#fff"
          d="M9.93 0c.88 0 1.6.67 1.66 1.52l.01.15v2.15c0 .54-.26 1.05-.7 1.36l-.13.08-3.73 2.17a3.4 3.4 0 1 1-2.48 0L.83 5.26A1.67 1.67 0 0 1 0 3.96L0 3.82V1.67C0 .79.67.07 1.52 0L1.67 0z"
        ></path>
        <path
          fill="url(#a)"
          d="M5.8 8.2a2.4 2.4 0 0 0-.16 4.8h.32a2.4 2.4 0 0 0-.16-4.8zM9.93 1H1.67a.67.67 0 0 0-.66.57l-.01.1v2.15c0 .2.1.39.25.52l.08.05L5.46 6.8c.1.06.2.09.29.1h.1l.1-.02.1-.03.09-.05 4.13-2.4c.17-.1.3-.29.32-.48l.01-.1V1.67a.67.67 0 0 0-.57-.66z"
        ></path>
      </svg>

      <div className={styles.hostDetails}>
        <div className={styles.hostedBy}>{`Hosted by ${hostName}`}</div>
        <div className={styles.hostingDuration}>
          {`${role} `}
          <span className={styles.thinnerDot}>&#183;</span>
          {` ${hostingDuration} years hosting`}
        </div>
      </div>
    </div>
  )
}

export default HostSummary
