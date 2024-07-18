import ProfilePicture from "../../assets/svg/profile_picture.svg";

export default function HeaderProfile() {
  return (
    <header>
      <section className="user">
        <img src={ProfilePicture} alt="profile" />
        <section className="info">
          <div>Benjamin Daniel-Noury</div>
          <div>Lien perso</div>
        </section>
        <section className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </section>
      </section>
      <section className="stat">
        <div>10 🎟</div>
        <div>32 👨‍👨‍👧‍👧</div>
      </section>
    </header>
  );
}
