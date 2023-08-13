import ProfilePicture from "./ProfilePicture";
import styles from "./index.module.css";
import WorkTogether from "./WorkTogether";

export default function LandingBanner() {
  return (
    <section className={styles.landingBanner}>
      <ProfilePicture/>
      <WorkTogether/>
    </section>
  );
}