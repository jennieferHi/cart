 

import { ScrollMotionContainer, ScrollMotionItem } from './scroll-motion'

export default function UlLiDemo() {
  const noteBlock = (
    <div className="row">
      <div
        style={{ 
          backgroundColor: '#ccc',
          marginBottom: 100,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1 className="display-5">Scroll觸發動畫: 列表項目按順序呈現(ul-li)</h1>
        <h1 className="display-5">⬇️ 向下捲動 ⬇️</h1>
      </div>
    </div>
  )

  return (
    <div className="container">
      {noteBlock}
      <div className="row">
        <ScrollMotionContainer element="ul">
          {Array(32)
            .fill(1)
            .map((v, i) => (
              <ScrollMotionItem element="li" type="up" key={i}>
                ITEM-{i + 1}
              </ScrollMotionItem>
            ))}
        </ScrollMotionContainer>
      </div>
    </div>
  )
}