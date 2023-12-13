import { useCallback, useEffect, useRef, useState } from 'react'

export default function useTextInterval(texts: string[], time: number) {
  const [title, setTitle] = useState('')
  const titleIndex = useRef(0)
  const currentIndex = useRef(0)
  const temp = useRef(false)

  // 텍스트 삭제 함수
  const deleteTyping = useCallback(
    (prevTitle:string) => {
      // 이전 타이틀이 비어있는 경우, 다음 텍스트로 전환
      if (prevTitle === '') {
        titleIndex.current =
          titleIndex.current + 1 >= texts.length ? 0 : titleIndex.current + 1
        temp.current = false
      }

      // 맨 뒤 글자를 제외한 나머지 글자로 업데이트
      return prevTitle.slice(0, prevTitle.length - 1)
    },
    [texts],
  )

  // 텍스트 추가 함수
  const addTyping = useCallback(
    (prevTitle:string) => {
      // 새로운 타이틀 생성
      const newTitle = prevTitle
        ? prevTitle + texts[titleIndex.current][currentIndex.current]
        : texts[titleIndex.current][currentIndex.current]

      // 현재 인덱스 증가
      currentIndex.current += 1

      return newTitle
    },
    [texts],
  )

  useEffect(() => {
    const typingTitle = setInterval(() => {
      // 타이핑 중인 경우
      if (temp.current) {
        setTitle(deleteTyping)
        return
      }

      // 현재 텍스트의 길이와 비교하여 다음 텍스트로 전환 여부 결정
      if (currentIndex.current === texts[titleIndex.current].length) {
        temp.current = true
        currentIndex.current = 0
        return
      }

      // 타이핑 중인 경우가 아니라면, 새로운 글자 추가
      setTitle(addTyping)
    }, time)

    // 컴포넌트 언마운트 시 타이머 클리어
    return () => clearInterval(typingTitle)
  }, [addTyping, deleteTyping, texts, time])

  return title
}
