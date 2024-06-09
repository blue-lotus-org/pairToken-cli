export class requset{
    async getToken(token,pairtoken){
        
        const myHeaders = new Headers();
     //   myHeaders.append("Cookie", "__cf_bm=DhzNmV_v2kfJ51CohywurKWjO27Z5mkGZcSAWr5ww6Y-1717697067-1.0.1.1-3SicgSbsBoRFXoJHy7hD6IXlkHYCOmLoHjiCmXfyJIWKE3eCKbVwlFBoVTyiG.eMvne309fzIZCw02klfVIqwmf9WDVRTWG7qTYvQ0XdGjI");
        
        const requestOptions = {
          method: "GET",
          headers: myHeaders,
          redirect: "follow"
        };
        
      const data = await  fetch(`https://api.dexscreener.com/latest/dex/search?q=${token}%20${pairtoken}`, requestOptions)

      return data.json();
          
    }
}