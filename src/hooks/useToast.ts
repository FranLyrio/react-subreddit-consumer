import { useCallback } from 'react'

export const useToast = () => {
  const addToast = useCallback(() => {
    console.log('add toast')
  }, [])

  return { addToast }
}
