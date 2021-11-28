import axios from "axios";
import {bseUrl} from './Constant/constant' 


const instance = axios.create({
  baseURL : bseUrl

  
});

export default instance