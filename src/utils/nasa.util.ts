import { Item } from "../App";

export const getAvailablePicturesForDate = async (date: string) => {    
    const url = `https://api.nasa.gov/EPIC/api/natural/date/${date}?api_key=${process.env.REACT_APP_NASA_API_KEY}`;
    const response = await fetch(url);
    const data = await response.json();
    
    const items = data.map((item: any) => {
        return {
            time: item.date,
            imageName: item.image
        }
    });

    return items as Item[];
}

export const getImage = (item: Item) => {
    const date = item.time.split(" ")[0].split("-").join("/");
    const url = `https://api.nasa.gov/EPIC/archive/natural/${date}/png/${item.imageName}.png?api_key=${process.env.REACT_APP_NASA_API_KEY}`; 
    return url;
}