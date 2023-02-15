
export default function MenuContent({ menu }) {
  return (
    <>
      <i className={menu.icon} />
      <p>{menu.name}</p>
    </>
  )
}