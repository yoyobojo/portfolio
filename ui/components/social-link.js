export const SocialLink = ({ link, icon }) => {
  const renderIcon = () => {
    switch (icon) {
      case 'github': return 'ion-social-github';
      case 'linkedin': return 'ion-social-linkedin';
      case 'twitter': return 'ion-social-twitter';
      default: return 'ion-calendar';
    }
  }
  return (
    <a target="_blank" href={link}>
    <span className={`ion ${renderIcon()}`} />
  </a>
  )
}
