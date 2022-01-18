class Nasa {
  constructor () {
    this.apiKey = '8WsXEUNa42eL0UZMYi2MakmPVTw2srQicqMnUbn6';
    this.startDate = 'start_date=2021-07-18';
    this.endDate = 'end_date=2021-07-23';
  }; 

  async getNasa() {
    const response = await fetch(`https://api.nasa.gov/planetary/apod?api_key=${this.apiKey}&${this.startDate}&${this.endDate}`);

    const responseData = await response.json();

    return responseData;
  };

}