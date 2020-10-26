const Icon = ({ children: icon, className, black }) => (
  <>
    {icon ? (
      <img
        className={className}
        title={icon}
        src={require(`./${icon.toLowerCase() + (black ? 'Black' : '')}.svg`)}
        alt={icon}
      />
    ) : null}
  </>
)

export default Icon
