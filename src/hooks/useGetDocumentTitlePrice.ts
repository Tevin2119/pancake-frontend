import { useEffect } from 'react'
import { useCakeBusdPrice } from 'hooks/useBUSDPrice'

const useGetDocumentTitlePrice = () => {
  const cakePriceBusd = useCakeBusdPrice()
  useEffect(() => {
    // const cakePriceBusdString = cakePriceBusd ? cakePriceBusd.toFixed(2) : ''

    const cakePriceBusdString = "test"
    document.title = `Arron - ${cakePriceBusdString}`
  }, [cakePriceBusd])
}
export default useGetDocumentTitlePrice
