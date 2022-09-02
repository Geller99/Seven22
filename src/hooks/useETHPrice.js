
function useETHPrice() {
    const API_LINK = 'https://min-api.cryptocompare.com/data/price?fsym=ETH&tsyms=USD';
    const fetchEthPrice = async () => {
        const res = await fetch(API_LINK);
        const response = await res.json();
        // console.log("ETH price data", response)
        return response['USD']
    }
  return {
    fetchEthPrice
  }
}

export default useETHPrice