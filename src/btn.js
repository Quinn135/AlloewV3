import './App.css';

const Btnp = ({ cont }) => {
  return (
    <button className="btn-primary">
      {cont}
    </button>
  )
}

const Btns = ({ cont }) => {
  return (
    <button className="btn-secondary">
      {cont}
    </button>
  )
}
const Btnt = ({ cont }, { page }) => {
  return (
    <button className="btn-tertiary">
      {cont}
    </button>
  )
}

export {
  Btnp,
  Btns,
  Btnt,
}
