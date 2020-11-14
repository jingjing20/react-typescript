import React, { useEffect, useState } from 'react';

export const LikeButton: React.FC = () => {
  const [like, setLike] = useState(0);
  const [swith, setSwith] = useState(true);
  useEffect(() => {
    document.title = `你点击了${like}`
  })
  return (
    <>
      <button onClick={() => { setLike(like + 1) }}>
        {like}👍
        </button>
      <button onClick={() => { setSwith(!swith) }}>
        {swith ? 'ON' : 'OFF'}
      </button>
    </>
  )
}
// export default LikeButton

