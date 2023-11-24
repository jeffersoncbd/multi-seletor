import React from 'react';

const options = ['Opção 01', 'Opção 02', 'Opção 03', 'Opção 04']

const App: React.FC = () => {
  const [left, setLeft] = React.useState(options)
  const [right, setRight] = React.useState<string[]>([])
  const [selected, setSelected] = React.useState<undefined | string>()

  return (
    <>
      <div className="header">
        <a href='https://github.com/jeffersoncbd/multi-seletor' target='_blank'>
          Ver no GitHub
          <span className="material-symbols-rounded">
            open_in_new
          </span>
        </a>
      </div>
      <div className='App'>
        <ul className="left">
          {left.sort().map((item) => <li key={item} className={item === selected ? 'selected' : undefined} onClick={() => setSelected(item)}>{item}</li>)}
        </ul>
        <div className="actions">
          <button onClick={() => {
            setSelected(undefined)
            setRight([])
            setLeft([...right, ...left])
          }}>
            <span className="material-symbols-rounded">
              keyboard_double_arrow_left
            </span>
          </button>
          <button
            className={selected === undefined ? 'blocked' : undefined}
            onClick={() => {
              const newRight = right.filter((item) => item !== selected)
              setRight(newRight)
              setLeft([...left, selected as string])
              setSelected(undefined)
            }}
          >
            <span className="material-symbols-rounded">
              keyboard_arrow_left
            </span>
          </button>
          <button
            className={selected === undefined ? 'blocked' : undefined}
            onClick={() => {
              const newLeft = left.filter((item) => item !== selected)
              setLeft(newLeft)
              setRight([...right, selected as string])
              setSelected(undefined)
            }}
          >
            <span className="material-symbols-rounded">
              keyboard_arrow_right
            </span>
          </button>
          <button onClick={() => {
            setSelected(undefined)
            setLeft([])
            setRight([...right, ...left])
          }}>
            <span className="material-symbols-rounded">
              keyboard_double_arrow_right
            </span>
          </button>
        </div>
        <ul className="right">
          {right.sort().map((item) => <li key={item} className={item === selected ? 'selected' : undefined} onClick={() => setSelected(item)}>{item}</li>)}
        </ul>
      </div>
    </>
  );
}

export default App